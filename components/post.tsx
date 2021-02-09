import React from "react";
import Head from "next/head";

import { loadCssAsync } from "../utils";
import { IPost } from "../types/post";
import { PostLink } from "./post-link";
import { SidebarLayout } from "./layout/sidebar-layout";
import { TableOfContents } from "./table-of-contents";
import { TitleHeader } from "./title-header";
import { SERIES_ID_MAP } from "../constants/series";
import { Anchor } from "./anchor";

export const Post: React.FunctionComponent<{
    post: IPost;
    next: IPost | null;
    previous: IPost | null;
}> = (props) => {
    React.useEffect(() => {
        if (!props.post.meta.containsCodeBlocks) {
            return;
        }

        loadCssAsync(
            "https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism-tomorrow.min.css"
        );
    }, []);

    return (
        <article>
            <Head>
                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://ryanmaffey.dev/post/${props.post.id}"
                        },
                        "headline": "${props.post.meta.title}",
                        "datePublished": "${props.post.meta.date}",
                        "author": {
                            "@type": "Person",
                            "name": "Ryan Maffey"
                        },
                        "publisher": {
                            "@type": "Person",
                            "name": "Ryan Maffey"
                        }
                    }`}
                </script>
            </Head>
            <TitleHeader>
                <h1>{props.post.meta.title}</h1>
                <p className="text-sm mb-0">
                    <time className="text-sm" dateTime={props.post.meta.date}>
                        {props.post.meta.date.split("-").reverse().join("/")}
                    </time>{" "}
                    &nbsp; | &nbsp; {props.post.meta.readTime} min read
                </p>
            </TitleHeader>
            <SidebarLayout
                side={() => (
                    <TableOfContents html={props.post.tableOfContents} />
                )}
                main={() => (
                    <section
                        className="post text-lg"
                        dangerouslySetInnerHTML={{
                            __html: props.post.html,
                        }}
                    />
                )}
            />

            <TitleHeader />

            {props.post.meta.series && (
                <>
                    <div className="container">
                        <h2>
                            More in the "{SERIES_ID_MAP[props.post.meta.series]}
                            " Series
                        </h2>
                        <p className="mb-8">
                            Thanks for reading! I hope you enjoyed the post and
                            found it useful. If you liked this, why not take a
                            look at{" "}
                            <Anchor href={`/series/${props.post.meta.series}`}>
                                more posts in the "
                                {SERIES_ID_MAP[props.post.meta.series]}" series
                            </Anchor>
                        </p>
                    </div>
                    <TitleHeader />
                </>
            )}

            <div className="container md:flex mt-8">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4">
                    {props.previous && (
                        <PostLink post={props.previous} headingSize={2} />
                    )}
                </div>
                <div className="w-full md:w-1/2 md:ml-4">
                    {props.next && (
                        <PostLink post={props.next} headingSize={2} />
                    )}
                </div>
            </div>
        </article>
    );
};
