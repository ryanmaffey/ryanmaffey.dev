import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import PageWrapper, { KEYWORDS } from "../components/site/PageWrapper";
import { getLatestPostsData } from "../utils/posts";
import { IPost } from "../types";
import { Anchor } from "../components/site/Anchor";
import Head from "next/head";
import { TagList } from "../components/tags/TagList";
import { TWITTER } from "../constants/urls";
import { SidebarLayout } from "../components/layouts/SidebarLayout";
import { getAllTags } from "../utils/tags";
import { TitleHeader } from "../components/site/TitleHeader";
import { PostList } from "../components/posts";

interface IProps {
    latestPosts: IPost[];
    tags: string[];
}

const Home: React.FC<IProps> = (props) => {
    const description =
        "I'm a Front-End Web Developer working in Bournemouth. I love creating applications for the web and teaching others how to do the same!";
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
            <PageWrapper title="Ryan Maffey" description={description}>
                <TitleHeader>
                    <h1>Hello, I'm Ryan!</h1>
                    <p>
                        I'm a Front-End Web Developer working in Bournemouth. I
                        love creating applications for the web and teaching /
                        sharing knowledge with other developers. That's why I
                        decided to share my thoughts, experiences and things
                        I've learned here on this blog!
                    </p>
                </TitleHeader>
                <SidebarLayout
                    sidebarPosition="right"
                    side={() => (
                        <section
                            className="mb-8 md:mb-12 overflow-auto sticky"
                            style={{
                                top: "1.25rem",
                            }}
                        >
                            <h2 className="mb-8">Popular Tags</h2>
                            <TagList tags={props.tags} />
                        </section>
                    )}
                    main={() => (
                        <section className="mb-8 md:mb-12">
                            <h2 className="mb-8">Latest Posts</h2>
                            <PostList
                                posts={props.latestPosts}
                                headingSize={3}
                            />
                        </section>
                    )}
                />

                <section className="container mb-8">
                    <h2>Series</h2>
                    <h3 className="text-primary">Explained</h3>
                    <p>
                        This series of posts is designed to make complicated (or
                        complicated-sounding) programming concepts and jargon
                        and help you understand what it all means in the
                        simplest way possible!{" "}
                        <Anchor href="/series/Explained">
                            See all posts in the "Explained" series.
                        </Anchor>
                    </p>
                </section>

                <TitleHeader />

                <section className="container">
                    <h2>Some Helpful Resources</h2>
                    <p className="mb-0">
                        I've curated a{" "}
                        <Anchor href="/resources">list of resources</Anchor>{" "}
                        across the web which I frequently find useful. Check
                        them out and see whether you find something new and
                        helpful for you! If you can think of anything that isn't
                        in my list which you think I might find useful, feel
                        free to{" "}
                        <Anchor href={TWITTER} isExternalLink>
                            let me know via Twitter
                        </Anchor>
                        !
                    </p>
                </section>
            </PageWrapper>
        </>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async (): Promise<
    GetStaticPropsResult<IProps>
> => ({
    props: {
        tags: getAllTags(),
        latestPosts: getLatestPostsData(4),
    },
});

export default Home;
