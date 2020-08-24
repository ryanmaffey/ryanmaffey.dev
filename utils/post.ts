export const getTableOfContents = (headings: NodeListOf<Element>) => {
    const getClassName = (num: number) => {
        switch (num) {
            case 1:
                return "ml-4 text-sm";
            case 2:
                return "ml-8 text-sm";
            default:
                return "";
        }
    };

    let list = "<ul class='toc'>";
    for (let i = 0; i < headings.length; i++) {
        let e = headings[i];
        let num = parseInt(e.nodeName[1]) - 2;
        list += `<li><a href="#${e.id}" class="${getClassName(num)}">${
            e.innerHTML
        }</a></li>`;
    }
    list += "</ul>";
    return list;
};
