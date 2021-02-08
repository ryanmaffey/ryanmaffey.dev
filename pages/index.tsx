import React from "react";

import Layout, { KEYWORDS } from "../components/layout";
import { getLatestPostsData, getAllTags } from "../lib/posts";
import { IPost } from "../types";
import { Anchor } from "../components/anchor";
import { PostList } from "../components/post-list";
import { TitleHeader } from "../components/title-header";
import Head from "next/head";
import { TagList } from "../components/tag-list";
import { TWITTER } from "../constants/urls";
import { SidebarLayout } from "../components/layout/sidebar-layout";

interface IProps {
    latestPosts: IPost[];
    tags: string[];
}

const Home: React.FC<IProps> = (props) => {
    const description =
        "I'm Ryan, a Front-End Web Developer working in Bournemouth. I love programming, creating applications for the web and teaching others how to do the same!";
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
                    <h1>Welcome</h1>
                    <p className="mb-0">
                        I'm Ryan, a Front-End Web Developer working in
                        Bournemouth. I love programming and creating
                        applications for the web, but I also enjoy teaching and
                        sharing knowledge with other developers, which is why I
                        decided to share my thoughts, experiences and things
                        I've learned here on this blog!
                    </p>
                </TitleHeader>
                <SidebarLayout
                    sidebarPosition="right"
                    side={() => (
                        <section
                            className="mb-16 overflow-auto sticky"
                            style={{
                                top: "1.25rem",
                            }}
                        >
                            <h2 className="mb-8">Popular Topics</h2>
                            <TagList tags={props.tags} />
                        </section>
                    )}
                    main={() => (
                        <section className="mb-16">
                            <h2>Latest Posts</h2>
                            <PostList
                                posts={props.latestPosts}
                                headingSize={3}
                            />
                        </section>
                    )}
                />

                <section className="container">
                    <h2>Some Helpful Resources</h2>
                    <p>
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
            </Layout>
        </>
    );
};

export const getStaticProps = async (): Promise<{ props: IProps }> => {
    const latestPosts = await getLatestPostsData(4);
    const tags = await getAllTags();
    return {
        props: {
            tags,
            latestPosts,
        },
    };
};

export default Home;
