import { IPost } from "../types";
import posts from "../data/blogPost.json";

export const getPostBySlug = (slug: string): IPost =>
    posts.find((p) => p.slug === slug);

export const getAllPosts = (): IPost[] =>
    posts.sort(
        (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
    );

export const getAllPostSlugs = () => posts.map((p) => p.slug);

type INextAndPreviousPosts = {
    next: IPost | null;
    previous: IPost | null;
};

export const getNextAndPreviousPostData = (
    date: string
): INextAndPreviousPosts => {
    const allPosts = getAllPosts();
    const post = allPosts.find((p) => p.publishDate === date);

    if (!post) {
        throw new Error(`No matching post for date ${date}`);
    }

    var res: INextAndPreviousPosts = {
        next: null,
        previous: null,
    };

    const index = allPosts.indexOf(post);

    if (index > 0) {
        const next = allPosts[index - 1];

        res.next = {
            ...next,
            title: "Next: " + next.title,
        };
    }

    if (index !== allPosts.length - 1) {
        const previous = allPosts[index + 1];

        res.previous = {
            ...previous,
            title: "Previous: " + previous.title,
        };
    }

    return res;
};

export const getLatestPostsData = (numberOfPosts: number): IPost[] =>
    getAllPosts().slice(0, numberOfPosts);
