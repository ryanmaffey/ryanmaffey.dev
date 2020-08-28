import { JSDOM } from "jsdom";
import { IPage } from "../types/page";
import { getHtmlFromMarkdown } from "../utils/markdown";
import { getTableOfContents } from "../utils/post";

export const getPage = async (
    filePath: string,
    fileName: string
): Promise<IPage> => {
    const htmlFromMarkdownResult = await getHtmlFromMarkdown(
        filePath,
        `${fileName}.md`
    );
    const dom = new JSDOM(htmlFromMarkdownResult.html.toString());
    const headings = dom.window.document.querySelectorAll("h2, h3, h4");

    return {
        html: dom.serialize(),
        tableOfContents: getTableOfContents(headings),
    };
};
