export interface IPost {
    title: string;
    slug: string;
    description: string;
    body: string;
    publishDate: string;
    keywords?: string[];
    tags?: string[];
    series?: string;
    readTime: number;
}

export interface IToCItem {
    id: string;
    text: string;
    level: number;
}
