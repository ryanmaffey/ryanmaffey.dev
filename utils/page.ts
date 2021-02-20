import pages from "../data/page.json";
import { IPage } from "../types";
import { getHtmlFromMarkdown } from "./markdown";

export const getPage = async (slug: string): Promise<IPage> => {
    const page = pages.find((p) => p.slug === slug) as IPage;

    return {
        ...page,
        body: await getHtmlFromMarkdown(page.body),
    };
};
