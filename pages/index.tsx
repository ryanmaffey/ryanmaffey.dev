import React from "react";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import { getLatestPostsData } from "../lib/posts";
import { IPost } from "../types";
import { PostList } from "../components/post-list";
import { LinkButton } from "../components/link-button";

interface IProps {
    latestPosts: IPost[];
}

const Home: React.StatelessComponent<IProps> = (props) => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="container">
                <div className="mb-10 bg-gray-800 rounded p-5">
                    <h1 className="mb-5">Hey, welcome!</h1>
                    <div className="flex flex-col md:flex-row items-center">
                        <p className="text-lg">
                            My name is Ryan, I'm a professional Front-End Web
                            Developer / Software Engineer working in
                            Bournemouth, UK. I love creating applications for
                            the web and teaching / sharing my knowledge with
                            other developers. To that end, I like write about my
                            thoughts, experiences and things I've learned so
                            that I can chare them with the world!
                        </p>
                        <picture className="my-5 md:my-0 md:ml-5 w-full max-w-md md:max-w-10 flex justify-center">
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
                                className="rounded w-auto"
                                width="448"
                                height="448"
                            />
                        </picture>
                    </div>
                    <div className="mt-2">
                        <LinkButton href="/about" className="text-lg">
                            Read more about me
                        </LinkButton>
                    </div>
                </div>
            </section>
            <section className="container">
                <h2>Latest Posts</h2>
                <PostList posts={props.latestPosts} headingSize={3} />
                <div className="mt-2">
                    <LinkButton href="/posts">See all blog posts</LinkButton>
                </div>
            </section>
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

export default Home;
