import React from "react";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import { getLatestPostsData } from "../lib/posts";
import { IPost } from "../types";
import { Anchor } from "../components/anchor";
import { PostList } from "../components/post-list";

interface IProps {
    latestPosts: IPost[];
}

const Home: React.StatelessComponent<IProps> = (props) => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="container py-10">
                <h1>Welcome!</h1>
                <div className="block md:flex items-center">
                    <p>
                        I'm Ryan, a professional Front-End Web Developer /
                        Software Engineer working in Bournemouth, UK. I love
                        creating applications for the web and teaching others
                        how to do the same. That's why I decided to share my
                        thoughts, experiences and things I've learned here on
                        this blog. I hope you find something useful!
                    </p>
                    {/* <picture className="hidden md:flex w-full md:ml-10">
                        <source
                            media="(max-width: 768px)"
                            srcSet="/img/ryanmaffey-md.webp"
                            type="image/webp"
                        />
                        <source
                            media="(max-width: 768px)"
                            srcSet="/img/ryanmaffey-md.jpg"
                            type="image/jpeg"
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet="/img/ryanmaffey-sm.webp"
                            type="image/webp"
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet="/img/ryanmaffey-sm.jpg"
                            type="image/jpeg"
                        />
                        <img
                            src="/img/ryanmaffey-lg.jpg"
                            alt=""
                            className="rounded-full w-auto m-auto"
                            width="448"
                            height="448"
                        />
                    </picture> */}
                </div>
                <Anchor href="/about" isLinkButton>
                    Read more about me
                </Anchor>
            </section>
            <section className="container">
                <h2>Latest Posts</h2>
                <PostList posts={props.latestPosts} headingSize={3} />
                <div className="mt-10">
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
