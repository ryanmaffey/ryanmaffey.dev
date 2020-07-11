import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
// @ts-ignore - no types available
import remarkHtml from "remark-html";
// @ts-ignore - no types available
import slug from "remark-slug";

import { IPost, IPostMeta } from "../types";
import { syntaxHighlightCodeBlocks } from "../utils/syntax-highlight";
import { getParts, addHeadingNumbers, getTableOfContents } from "../utils/post";

export const getAllPostIds = async () => {
    const fileNames = fs.readdirSync("posts");
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
};

export const getPostData = async (id: string): Promise<IPost> => {
    const fullPath = path.join("posts", `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const htmlFromMarkdownDocument = (
        await remark().use(slug).use(remarkHtml).process(matterResult.content)
    ).toString();

    const postData = await getParts(htmlFromMarkdownDocument)
        .then(addHeadingNumbers)
        .then((parts) => ({
            ...parts,
            dom: syntaxHighlightCodeBlocks(parts.dom),
        }))
        .then((parts) => {
            return Promise.resolve({
                id,
                html: parts.dom.serialize(),
                tableOfContents: getTableOfContents(parts.headings),
                meta: matterResult.data as IPostMeta,
            });
        });

    return postData;
};

export const getLatestPostsData = async (): Promise<IPost[]> => {
    const fileNames = fs.readdirSync("posts");
    return fileNames
        .map((f) => {
            const fullPath = path.join("posts", f);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the id
            return {
                id: f.replace(".md", ""),
                html: "",
                tableOfContents: "",
                meta: matterResult.data as IPostMeta,
            };
        })
        .sort(
            (a, b) =>
                new Date(b.meta.date).getTime() -
                new Date(a.meta.date).getTime()
        )
        .slice(0, 3);
};
