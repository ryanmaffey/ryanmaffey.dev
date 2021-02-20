import { JSDOM } from "jsdom";
import remark from "remark";
// @ts-ignore - no types available
import remarkHtml from "remark-html";
// @ts-ignore - no types available
import slug from "remark-slug";
// @ts-ignore - no types available
import prism from "remark-prism";

export const getHtmlFromMarkdown = async (md: string): Promise<string> => {
    const htmlString = await remark()
        .use(slug)
        .use(prism)
        .use(remarkHtml)
        // @ts-ignore
        .process(md)
        .then((res) => res.toString());

    const dom = new JSDOM(htmlString);

    dom.window.document.querySelectorAll("a").forEach((a) => {
        if (a.getAttribute("href")?.startsWith("http")) {
            a.setAttribute("rel", "noopener");
            a.setAttribute("target", "_blank");
        }
        a.classList.add("c-link");
    });

    return dom.serialize();
};
