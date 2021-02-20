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
import { SERIES_ID_MAP } from "../../constants/series";
import { getAllSeries, getPostsInSeries } from "../../utils/series";

interface IProps {
    id: string;
    name: string;
    posts: IPost[];
}

const TagPage: React.FC<IProps> = (props) => {
    return (
        <PageWrapper
            title={`"${props.name}" Posts`}
            description={`All blog posts tagged with "${props.name}"`}
        >
            <TitleHeader>
                <h1 className="m-0">Series: "{props.name}"</h1>
                {props.id === "Explained" && (
                    <p className="mt-4">
                        This series of posts is designed to make complicated (or
                        complicated-sounding) programming concepts and jargon
                        and help you understand what it all means in the
                        simplest way possible!
                    </p>
                )}
            </TitleHeader>
            <div className="container">
                <PostList {...props} headingSize={2} />
            </div>
        </PageWrapper>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async ({
    params,
}): Promise<GetStaticPropsResult<IProps>> => {
    const id = params?.id as string;

    return {
        props: {
            id,
            name: SERIES_ID_MAP[id],
            posts: getPostsInSeries(id),
        },
    };
};

type PathParams = {
    id: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async (): Promise<
    GetStaticPathsResult<PathParams>
> => {
    return {
        paths: getAllSeries().map((id) => ({
            params: {
                id,
            },
        })),
        fallback: false,
    };
};

export default TagPage;
