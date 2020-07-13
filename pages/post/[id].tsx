import React from "react";

import { getAllPostIds, getPost } from "../../lib/posts";
import { Post } from "../../components/post";
import Layout from "../../components/layout";
import { IPost } from "../../types";

interface IProps {
    post: IPost;
}

const PostsPage: React.StatelessComponent<IProps> = (props) => {
    return (
        <>
            <Layout>
                <Post post={props.post} />
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
    return {
        props: {
            post,
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

export default PostsPage;
