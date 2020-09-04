import React from "react";

import Layout from "../../components/layout";
import { getLatestPostsData } from "../../lib/posts";
import { PostList } from "../../components/post-list";
import { IPost } from "../../types";
import { TitleHeader } from "../../components/title-header";

interface IProps {
    latestPosts: IPost[];
}

const PostsPage: React.StatelessComponent<IProps> = (props) => {
    return (
        <Layout
            title="Posts"
            description="Here are all my latest blog posts for you to browse and enjoy! I love to write about web technologies, programming and software development."
        >
            <TitleHeader>
                <h1 className="m-0">Posts</h1>
                <p className="text-gray-500 mb-0">
                    Here are all my blog posts for you to browse and enjoy.
                </p>
            </TitleHeader>
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
