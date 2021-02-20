import { IPost } from "../types";
import { getAllPosts } from "./posts";

export const getAllSeries = (): string[] => {
    let arr: string[] = [];

    getAllPosts().forEach((p) => p.series && arr.push(p.series));

    return [...new Set(arr)];
};

export const getPostsInSeries = (series: string): IPost[] =>
    getAllPosts().filter((p) => p.series === series);
