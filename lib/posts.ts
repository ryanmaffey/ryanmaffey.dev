import fs from "fs";
import path from "path";
import matter from "gray-matter";
import jsdom from "jsdom";

import { IPost, IPostMeta } from "../types";
import { syntaxHighlightCodeBlocks } from "../utils/syntax-highlight";
import { addHeadingNumbers, getTableOfContents } from "../utils/post";
import { getHtmlFromMarkdown } from "../utils/markdown";

const { JSDOM } = jsdom;

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

export const getPost = async (id: string): Promise<IPost> => {
    const htmlFromMarkdownResult = await getHtmlFromMarkdown(
        "posts",
        `${id}.md`
    );
    const dom = new JSDOM(htmlFromMarkdownResult.html.toString());
    const headings = dom.window.document.querySelectorAll("h2, h3, h4");

    // addHeadingNumbers(dom);
    syntaxHighlightCodeBlocks(dom);

    return {
        id,
        html: dom.serialize(),
        tableOfContents: getTableOfContents(headings),
        meta: htmlFromMarkdownResult.grayMatter.data as IPostMeta,
    };
};

export const getLatestPostsData = async (
    numberOfPosts: number
): Promise<IPost[]> => {
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
        .slice(0, numberOfPosts);
};
