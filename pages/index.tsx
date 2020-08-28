import React from "react";

import Layout from "../components/layout";
import { getLatestPostsData } from "../lib/posts";
import { IPost } from "../types";
import { Anchor } from "../components/anchor";
import { PostList } from "../components/post-list";

interface IProps {
    latestPosts: IPost[];
}

const Home: React.StatelessComponent<IProps> = (props) => {
    return (
        <Layout
            title="Welcome to My Blog!"
            description="I'm Ryan, a Front-End Web Developer working in Bournemouth, UK. I love creating applications for the web and teaching others how to do the same!"
        >
            <div className="py-8 md:py-20 mb-8 bg-gray-900 text-center">
                <section className="container">
                    <h1>Welcome to My Blog!</h1>
                    <p className="mb-8">
                        I'm Ryan, a professional Front-End Web Developer /
                        Software Engineer working in Bournemouth, UK. I love
                        creating applications for the web and teaching others
                        how to do the same. That's why I decided to share my
                        thoughts, experiences and things I've learned here on
                        this blog.
                    </p>
                    <Anchor href="/about" isLinkButton className="bg-gray-800">
                        Read more about me
                    </Anchor>
                </section>
            </div>
            <section className="container">
                <h2>Latest Posts</h2>
                <PostList posts={props.latestPosts} headingSize={3} />
                <div className="mt-8">
                    <Anchor href="/posts" isLinkButton>
                        See all posts
                    </Anchor>
                </div>
            </section>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: IProps }> => {
    const latestPosts = await getLatestPostsData(3);
    return {
        props: {
            latestPosts,
        },
    };
};

export default Home;
