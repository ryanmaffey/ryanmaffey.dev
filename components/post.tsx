import React from "react";
import Head from "next/head";

import { loadCssAsync } from "../utils";
import { IPost } from "../types/post";
import { PostLink } from "./post-link";
import { SidebarLayout } from "./layout/sidebar-layout";
import { TableOfContents } from "./table-of-contents";
import { TitleHeader } from "./title-header";

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
                <p className="text-sm mb-0 text-gray-500">
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
