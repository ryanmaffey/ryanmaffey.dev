import React from "react";
import {
    GetStaticPaths,
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from "next";
import Head from "next/head";

import {
    getAllPostSlugs,
    getNextAndPreviousPostData,
    getPostBySlug,
} from "../../utils/posts";
import { Post } from "../../components/posts/Post";
import PageWrapper from "../../components/site/PageWrapper";
import { IPost, IToCItem } from "../../types";
import { getTableOfContentsFromMarkdown } from "../../utils/toc";
import { getHtmlFromMarkdown } from "../../utils/markdown";

interface IProps {
    post: IPost;
    tocItems: IToCItem[];
    next: IPost | null;
    previous: IPost | null;
}

const PostPage: React.FC<IProps> = (props) => {
    return (
        <>
            <Head>
                <link
                    href="/styles/prism.min.css"
                    type="text/css"
                    rel="stylesheet"
                />
            </Head>
            <PageWrapper
                title={props.post.title}
                description={props.post.description}
                keywords={props.post.keywords}
            >
                <Post {...props} />
            </PageWrapper>
        </>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async ({
    params,
}): Promise<GetStaticPropsResult<IProps>> => {
    const post = getPostBySlug(params?.slug as string);
    const nextAndPreviousPostData = getNextAndPreviousPostData(
        post.publishDate
    );

    return {
        props: {
            post: { ...post, body: await getHtmlFromMarkdown(post.body) },
            tocItems: await getTableOfContentsFromMarkdown(post.body),
            ...nextAndPreviousPostData,
        },
    };
};

type PathParams = {
    slug: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async (): Promise<
    GetStaticPathsResult<PathParams>
> => {
    const slugs = getAllPostSlugs();

    return {
        paths: slugs.map((slug) => ({
            params: {
                slug,
            },
        })),
        fallback: false,
    };
};

export default PostPage;
