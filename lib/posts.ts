import fs from "fs";
import path from "path";
import matter from "gray-matter";
import jsdom from "jsdom";

import { IPost, IPostMeta } from "../types";
import { syntaxHighlightCodeBlocks } from "../utils/syntax-highlight";
import { getTableOfContents } from "../utils/post";
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

    syntaxHighlightCodeBlocks(dom);

    return {
        id,
        html: dom.serialize(),
        tableOfContents: getTableOfContents(headings),
        meta: htmlFromMarkdownResult.grayMatter.data as IPostMeta,
    };
};

type getNextAndPreviousPostDataResult = {
    next: IPost | null;
    previous: IPost | null;
};

export const getNextAndPreviousPostData = async (
    date: string
): Promise<getNextAndPreviousPostDataResult> => {
    const allPosts = await getAllPostData();
    const post = allPosts.find((p) => p.meta.date === date);
    if (!post) throw new Error(`No matching post for date ${date}`);
    const index = allPosts.indexOf(post);
    var res: getNextAndPreviousPostDataResult = {
        next: null,
        previous: null,
    };

    if (index > 0) {
        const next = allPosts[index - 1];
        res.next = {
            ...next,
            meta: {
                ...next.meta,
                title: "Next: " + next.meta.title,
            },
        };
    }

    if (index !== allPosts.length - 1) {
        const previous = allPosts[index + 1];
        res.previous = {
            ...previous,
            meta: {
                ...previous.meta,
                title: "Previous: " + previous.meta.title,
            },
        };
    }

    return res;
};

export const getLatestPostsData = async (
    numberOfPosts: number
): Promise<IPost[]> => {
    return (await getAllPostData()).slice(0, numberOfPosts);
};

export const getAllTags = async () => {
    let obj: { [key: string]: number } = {};

    (await getAllPostData()).forEach((post) => {
        if (!post.meta.tags) {
            return;
        }

        post.meta.tags.forEach((tag) => {
            if (!obj[tag]) {
                obj[tag] = 1;
                return;
            }

            obj[tag]++;
        });
    });

    return Object.entries(obj)
        .sort((a, b) => b[1] - a[1])
        .map((x) => x[0]);
};

export const getAllTagsPaths = async () => {
    return (await getAllTags()).map((tag) => {
        return {
            params: {
                tag,
            },
        };
    });
};

export const getPostsWithTag = async (tag: string): Promise<IPost[]> => {
    return (await getAllPostData()).filter((p) => p.meta.tags?.includes(tag));
};

export const getAllSeries = async () => {
    let arr: string[] = [];

    (await getAllPostData()).forEach(
        (p) => p.meta.series && arr.push(p.meta.series)
    );

    return [...new Set(arr)];
};

export const getAllSeriesPaths = async () => {
    return (await getAllSeries()).map((id) => {
        return {
            params: {
                id,
            },
        };
    });
};

export const getPostsInSeries = async (id: string): Promise<IPost[]> => {
    return (await getAllPostData()).filter((p) => p.meta.series === id);
};

export const getAllPostData = async (): Promise<IPost[]> => {
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
        );
};
