import { IPost } from "../types";
import { getAllPosts } from "./posts";

export const getAllTags = () => {
    let obj: { [key: string]: number } = {};

    getAllPosts().forEach((post) => {
        if (!post.tags) {
            return;
        }

        post.tags.forEach((tag) => {
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

export const getPostsWithTag = (tag: string): IPost[] =>
    getAllPosts().filter((p) => p.tags?.includes(tag));
