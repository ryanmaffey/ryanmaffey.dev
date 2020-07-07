import React from "react";
import Head from "next/head";

import Layout, { siteTitle } from "../../components/layout";
import { getLatestPostsData } from "../../lib/posts";
import { PostList } from "../../components/post-list";
import { IPost } from "../../types";

interface IProps {
    latestPosts: IPost[];
}

const PostsPage: React.StatelessComponent<IProps> = (props) => {
    return (
        <Layout>
            <Head>
                <title>Posts | {siteTitle}</title>
            </Head>
            <div className="container">
                <div className="bg-gray-800 mb-5 p-5 rounded">
                    <h1 className="m-0">Posts</h1>
                </div>
            </div>
            <div className="container">
                <PostList posts={props.latestPosts} headingSize={2} />
            </div>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: IProps }> => {
    const latestPosts = await getLatestPostsData();
    return {
        props: {
            latestPosts,
        },
    };
};

export default PostsPage;
