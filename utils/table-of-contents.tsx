import {
    ITableOfContentsItemInfo,
    ITableOfContentsItem,
    ITableOfContents,
} from "../types";

export const buildTableOfContents = (
    tableOfContents: ITableOfContentsItemInfo[]
) => {
    const handleItem = (itemToAdd: ITableOfContentsItemInfo) => {
        const getChildrenAtDepth = (depth: number): ITableOfContentsItem[] => {
            let count = depth;
            let target = toc;
            while (count > 0) {
                target = target[target.length - 1].children;
                count--;
            }
            return target;
        };

        getChildrenAtDepth(itemToAdd.lvl - 2).push({
            item: itemToAdd,
            children: [],
        });
    };

    const toc: ITableOfContents = [];
    tableOfContents.forEach(handleItem);
    return toc;
};

export const generateTableOfContentsListItems = (
    item: ITableOfContentsItem
) => {
    const className = "hover:text-teal-400 focus:text-teal-400";
    if (!item.children.length) {
        return (
            <li key={item.item.slug}>
                <a href={"#" + item.item.slug} className={className}>
                    {item.item.content}
                </a>
            </li>
        );
    } else {
        return (
            <li key={item.item.slug}>
                <a href={"#" + item.item.slug} className={className}>
                    {item.item.content}
                </a>
                <ol>{item.children.map(generateTableOfContentsListItems)}</ol>
            </li>
        );
    }
};
