export interface IPost {
    id: string;
    html: string;
    tableOfContents: ITableOfContents;
    meta: IPostMeta;
}

export interface IPostMeta {
    title: string;
    date: string;
    readTime: number;
    description: string;
    containsCodeBlocks: boolean;
}

export interface ITableOfContentsItemInfo {
    content: string;
    slug: string;
    lvl: number;
    id: number;
}

export interface ITableOfContentsItem {
    item: ITableOfContentsItemInfo;
    children: ITableOfContentsItem[];
}

export type ITableOfContents = ITableOfContentsItem[];
