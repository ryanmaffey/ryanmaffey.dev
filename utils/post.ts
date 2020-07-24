import jsdom from "jsdom";

export const addHeadingNumbers = (dom: jsdom.JSDOM) => {
    const elements = dom.window.document.querySelectorAll("*");
    let level2 = 0,
        level3 = 0,
        level4 = 0;

    const getHeadingNumbers = (e: Element) => {
        switch (e.nodeName) {
            case "H2":
                level2++;
                level3 = 0;
                level4 = 0;
                return `${level2}.`;
            case "H3":
                level3++;
                level4 = 0;
                return `${level2}.${level3}.`;
            case "H4":
                level4++;
                return `${level2}.${level3}.${level4}.`;
            default:
                return "";
        }
    };

    for (let i = 0; i < elements.length; i++) {
        let e = elements[i];
        if (e.nodeName === "H2" || e.nodeName === "H3" || e.nodeName === "H4") {
            let newNode = dom.window.document.createElement("span");
            newNode.innerHTML = getHeadingNumbers(e);
            newNode.classList.add(
                "text-teal-400",
                "mb-2",
                "md:mr-3",
                "md:mb-0"
            );
            e.insertBefore(newNode, e.childNodes[0]);
            e.classList.add("flex", "flex-col", "md:flex-row");
        }
    }
};

export const getTableOfContents = (headings: NodeListOf<Element>) => {
    const getClassName = (num: number) => {
        switch (num) {
            case 1:
                return "ml-3";
            case 2:
                return "ml-6";
            default:
                return "";
        }
    };

    let list = "<ul class='toc'>";
    for (let i = 0; i < headings.length; i++) {
        let e = headings[i];
        let num = parseInt(e.nodeName[1]) - 2;
        let firstChildClassList = e.children[0].classList;
        firstChildClassList.add("mr-2", "md:mr-2");
        firstChildClassList.remove("md:mr-3");
        list += `<li><a href="#${e.id}" class="${getClassName(num)}">${
            e.innerHTML
        }</a></li>`;
    }
    list += "</ul>";
    return list;
};
