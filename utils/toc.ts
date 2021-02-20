import { JSDOM } from "jsdom";
import { IToCItem } from "../types";
import { getHtmlFromMarkdown } from "./markdown";

export const getTableOfContentsFromMarkdown = async (
    md: string
): Promise<IToCItem[]> => {
    if (!md || !md.length) {
        return [];
    }

    const html = await getHtmlFromMarkdown(md);
    const dom = new JSDOM(html);
    const headings = dom.window.document.querySelectorAll("h2, h3, h4");

    const res = [];
    for (let i = 0; i < headings.length; i++) {
        res.push({
            id: headings[i].id,
            text: headings[i].innerHTML,
            level: parseInt(headings[i].nodeName[1]) - 2,
        });
    }

    return res;
};
