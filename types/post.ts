export interface IPost {
    id: string;
    html: string;
    tableOfContents: string;
    meta: IPostMeta;
}

export interface IPostMeta {
    title: string;
    date: string;
    readTime: number;
    description: string;
    containsCodeBlocks: boolean;
    keywords?: string[];
    tags?: string[];
}
