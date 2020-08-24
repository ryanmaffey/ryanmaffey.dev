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
            <div className="py-8 md:py-20 mb-8 bg-gray-900 text-center">
                <h1 className="m-0">All Posts</h1>
            </div>
            <div className="container">
                <PostList posts={props.latestPosts} headingSize={2} />
            </div>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: IProps }> => {
    const latestPosts = await getLatestPostsData(20);
    return {
        props: {
            latestPosts,
        },
    };
};

export default PostsPage;
