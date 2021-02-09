import React from "react";

import { getPostsInSeries, getAllSeriesPaths } from "../../lib/posts";
import Layout from "../../components/layout";
import { IPost } from "../../types";
import { PostList } from "../../components/post-list";
import { TitleHeader } from "../../components/title-header";
import { SERIES_ID_MAP } from "../../constants/series";

interface IProps {
    id: string;
    posts: IPost[];
}

const TagPage: React.FC<IProps> = (props) => {
    return (
        <>
            <Layout
                title={`"${SERIES_ID_MAP[props.id]}" Posts`}
                description={`All blog posts tagged with "${
                    SERIES_ID_MAP[props.id]
                }"`}
            >
                {props.id === "WTF" && (
                    <TitleHeader>
                        <h1 className="m-0">WTF is...?</h1>
                        <p className="mt-4">
                            This series of posts is designed to make complicated
                            (or complicated-sounding) programming concepts and
                            jargon and help you understand what it all means in
                            the simplest way possible!
                        </p>
                    </TitleHeader>
                )}
                <div className="container">
                    <PostList {...props} headingSize={2} />
                </div>
            </Layout>
        </>
    );
};

export const getStaticProps = async ({
    params,
}: {
    params: { id: string };
}): Promise<{ props: IProps }> => {
    const posts = await getPostsInSeries(params.id);

    return {
        props: {
            id: params.id,
            posts,
        },
    };
};

export async function getStaticPaths() {
    const paths = await getAllSeriesPaths();
    return {
        paths,
        fallback: false,
    };
}

export default TagPage;
