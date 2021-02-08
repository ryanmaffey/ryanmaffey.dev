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

const TagPage: React.FC<IProps> = (props) => {
    return (
        <>
            <Layout
                title={`"${props.tag}" posts`}
                description={`All blog posts tagged with "${props.tag}"`}
            >
                <TitleHeader>
                    <h1 className="m-0">"{props.tag}" posts</h1>
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
