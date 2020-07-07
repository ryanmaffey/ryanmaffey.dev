import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
// @ts-ignore - no types available
import remarkHtml from "remark-html";
// @ts-ignore - no types available
import slug from "remark-slug";
// @ts-ignore - no types available
import toc from "markdown-toc";

import { IPost, IPostMeta, ITableOfContentsItemInfo } from "../types";
import { buildTableOfContents } from "../utils/table-of-contents";
import { syntaxHighlightCodeBlocks } from "../utils/syntax-highlight";

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
    const htmlFromMarkdownDocument = await remark()
        .use(slug)
        .use(remarkHtml)
        .process(matterResult.content);

    return {
        id,
        html: syntaxHighlightCodeBlocks(htmlFromMarkdownDocument.toString()),
        tableOfContents: buildTableOfContents(
            toc(fileContents).json as ITableOfContentsItemInfo[]
        ),
        meta: matterResult.data as IPostMeta,
    };
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
                tableOfContents: [],
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
