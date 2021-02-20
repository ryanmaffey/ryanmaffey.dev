import React from "react";
import {
    GetStaticPaths,
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
} from "next";

import PageWrapper from "../../components/site/PageWrapper";
import { IPost } from "../../types";
import { PostList } from "../../components/posts/PostList";
import { TitleHeader } from "../../components/site/TitleHeader";
import { getAllTags, getPostsWithTag } from "../../utils/tags";

interface IProps {
    tag: string;
    posts: IPost[];
}

const TagPage: React.FC<IProps> = (props) => {
    return (
        <>
            <PageWrapper
                title={`"${props.tag}" Posts`}
                description={`All blog posts tagged with "${props.tag}"`}
            >
                <TitleHeader>
                    <h1 className="m-0">"{props.tag}" Posts</h1>
                </TitleHeader>
                <div className="container">
                    <PostList {...props} headingSize={2} />
                </div>
            </PageWrapper>
        </>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async ({
    params,
}): Promise<GetStaticPropsResult<IProps>> => {
    const tag = params?.tag as string;

    return {
        props: {
            tag,
            posts: getPostsWithTag(tag),
        },
    };
};

type PathParams = {
    tag: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async (): Promise<
    GetStaticPathsResult<PathParams>
> => {
    return {
        paths: getAllTags().map((tag) => ({
            params: {
                tag,
            },
        })),
        fallback: false,
    };
};

export default TagPage;
