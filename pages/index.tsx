import React from "react";

import Layout, { KEYWORDS } from "../components/layout";
import { getLatestPostsData } from "../lib/posts";
import { IPost } from "../types";
import { Anchor } from "../components/anchor";
import { PostList } from "../components/post-list";
import { TitleHeader } from "../components/title-header";
import Head from "next/head";

interface IProps {
    latestPosts: IPost[];
}

const Home: React.StatelessComponent<IProps> = (props) => {
    const description =
        "I'm Ryan, a Front-End Web Developer working in Bournemouth. I love creating applications for the web and teaching others how to do the same!";
    return (
        <>
            <Head>
                <script type="application/ld+json">
                    {`{
                        "@context": "http://schema.org",
                        "@type": "Blog",
                        "about": "${description}",
                        "author": {
                            "name": "Ryan Maffey"
                        },
                        "keywords": "${KEYWORDS.join(", ")}",
                        "name": "ryanmaffey.dev",
                        "url": "https://www.ryanmaffey.dev"
                    }`}
                </script>
            </Head>
            <Layout title="Welcome to ryanmaffey.dev" description={description}>
                <TitleHeader>
                    <h1>
                        Welcome to{" "}
                        <span className="text-orange-400">ryanmaffey.dev</span>
                    </h1>
                    <p className="mb-8">
                        I'm Ryan, a Front-End Web Developer working in
                        Bournemouth. I love creating applications for the web
                        and teaching others how to do the same, which is why I
                        decided to share my thoughts, experiences and things
                        I've learned here on this blog!
                    </p>
                    <Anchor href="/about" isLinkButton className="bg-gray-800">
                        Read more about me
                    </Anchor>
                </TitleHeader>
                <section className="container">
                    <h2>Latest Posts</h2>
                    <PostList posts={props.latestPosts} headingSize={3} />
                    <div className="mt-8">
                        <Anchor href="/posts" isLinkButton>
                            See all blog posts
                        </Anchor>
                    </div>
                </section>
            </Layout>
        </>
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
