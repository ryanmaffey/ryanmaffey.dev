import React from "react";

import { getPostsWithTag, getAllTagsPaths } from "../../lib/posts";
import Layout from "../../components/layout";
import { IPost } from "../../types";
import { PostList } from "../../components/post-list";
import { TitleHeader } from "../../components/title-header";

interface IProps {
    tag: string;
    posts: IPost[];
}

const TagPage: React.StatelessComponent<IProps> = (props) => {
    return (
        <>
            <Layout
                title={`#${props.tag}`}
                description={`All blog posts tagged with #${props.tag}`}
            >
                <TitleHeader>
                    <h1 className="m-0">#{props.tag}</h1>
                    <p className="text-gray-500 mb-0">
                        Here are all the blog posts tagged with #{props.tag}.
                    </p>
                </TitleHeader>
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
    params: { tag: string };
}): Promise<{ props: IProps }> => {
    const posts = await getPostsWithTag(params.tag);

    return {
        props: {
            tag: params.tag,
            posts,
        },
    };
};

export async function getStaticPaths() {
    const paths = await getAllTagsPaths();
    return {
        paths,
        fallback: false,
    };
}

export default TagPage;
