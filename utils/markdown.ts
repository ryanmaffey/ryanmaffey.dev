import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
// @ts-ignore - no types available
import remarkHtml from "remark-html";
// @ts-ignore - no types available
import slug from "remark-slug";
// @ts-ignore - no types available
import prism from "remark-prism";

export const getGrayMatter = (filePath: string, fileName: string) => {
    const fullPath = path.join(filePath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return matter(fileContents);
};

export const getHtmlFromMarkdown = async (
    filePath: string,
    fileName: string
) => {
    const grayMatter = getGrayMatter(filePath, fileName);
    const html = await remark()
        .use(slug)
        .use(prism)
        .use(remarkHtml)
        .process(grayMatter.content);

    return {
        grayMatter,
        html,
    };
};
