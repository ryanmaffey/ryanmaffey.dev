import React from "react";

import Layout from "../../components/layout";
import { getLatestPostsData } from "../../lib/posts";
import { PostList } from "../../components/post-list";
import { IPost } from "../../types";

interface IProps {
    latestPosts: IPost[];
}

const PostsPage: React.StatelessComponent<IProps> = (props) => {
    return (
        <Layout
            title="All Posts"
            description="Here's all my latest blog posts for you to browse and enjoy! I love to write about web technologies, programming and software development."
        >
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
