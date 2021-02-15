import React from "react";

import {
    getAllPostIds,
    getPost,
    getNextAndPreviousPostData,
} from "../../lib/posts";
import { Post } from "../../components/post";
import Layout from "../../components/layout";
import { IPost } from "../../types";
import Head from "next/head";

interface IProps {
    post: IPost;
    next: IPost | null;
    previous: IPost | null;
}

const PostPage: React.FC<IProps> = (props) => {
    return (
        <>
            <Head>
                {props.post.meta.containsCodeBlocks && (
                    <link
                        href="/styles/prism.min.css"
                        type="text/css"
                        rel="stylesheet"
                    />
                )}
            </Head>
            <Layout
                title={props.post.meta.title}
                description={props.post.meta.description}
                keywords={props.post.meta.keywords}
            >
                <Post {...props} />
            </Layout>
        </>
    );
};

export const getStaticProps = async ({
    params,
}: {
    params: { id: string };
}): Promise<{ props: IProps }> => {
    const post = await getPost(params.id);
    const nextAndPreviousPostData = await getNextAndPreviousPostData(
        post.meta.date
    );

    return {
        props: {
            post,
            ...nextAndPreviousPostData,
        },
    };
};

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default PostPage;
