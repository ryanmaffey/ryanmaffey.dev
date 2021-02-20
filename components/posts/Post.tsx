import React from "react";
import Head from "next/head";

import { IPost, IToCItem } from "../../types/post";
import { PostLink } from "./PostLink";
import { SidebarLayout } from "../layouts/SidebarLayout";
import { SERIES_ID_MAP } from "../../constants/series";
import { Anchor } from "../site/Anchor";
import { TagList } from "../tags/TagList";
import { formatDate } from "../../utils/formatDate";
import { TitleHeader } from "../site/TitleHeader";
import { TableOfContents } from "../table-of-contents";

export const Post: React.FC<{
    post: IPost;
    tocItems: IToCItem[];
    next: IPost | null;
    previous: IPost | null;
}> = (props) => (
    <article>
        <Head>
            <script type="application/ld+json">
                {`{
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://ryanmaffey.dev/post/${props.post.slug}"
                        },
                        "headline": "${props.post.title}",
                        "datePublished": "${props.post.publishDate}",
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
            <h1>{props.post.title}</h1>
            <p className="text-sm mb-0">
                <time className="text-sm" dateTime={props.post.publishDate}>
                    {formatDate(new Date(props.post.publishDate))}
                </time>{" "}
                &nbsp; | &nbsp; {props.post.readTime} min read
            </p>
        </TitleHeader>
        <SidebarLayout
            side={() => <TableOfContents items={props.tocItems} />}
            main={() => (
                <>
                    <section
                        className="post text-lg"
                        dangerouslySetInnerHTML={{ __html: props.post.body }}
                    />
                    <div className="mt-8 md:mt-12 mb-8">
                        <h2>Tags</h2>
                        {props.post.tags && <TagList tags={props.post.tags} />}
                    </div>
                </>
            )}
        />

        <TitleHeader />

        {props.post.series && (
            <>
                <div className="container">
                    <h2>
                        More in the "{SERIES_ID_MAP[props.post.series]}" Series
                    </h2>
                    <p className="mb-8">
                        Thanks for reading! I hope you enjoyed the post and
                        found it useful. If you liked this, why not take a look
                        at{" "}
                        <Anchor href={`/series/${props.post.series}`}>
                            more posts in the "
                            {SERIES_ID_MAP[props.post.series]}" series
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
                {props.next && <PostLink post={props.next} headingSize={2} />}
            </div>
        </div>
    </article>
);
