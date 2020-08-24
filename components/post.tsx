import React from "react";
import Head from "next/head";

import { siteTitle } from "./layout";
import { loadCssAsync } from "../utils";
import { IPost } from "../types/post";
import { PostLink } from "./post-link";

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
        <>
            <Head>
                <title>{props.post.meta.title + " | " + siteTitle}</title>
            </Head>
            <article>
                <header className="py-10 md:py-20 mb-10 bg-gray-800 text-center">
                    <div className="container">
                        <h1>{props.post.meta.title}</h1>
                        <p className="text-sm mb-0">
                            <time
                                className="text-sm"
                                dateTime={props.post.meta.date
                                    .split("/")
                                    .reverse()
                                    .join("-")}
                            >
                                {props.post.meta.date}
                            </time>{" "}
                            &nbsp; ({props.post.meta.readTime} min read)
                        </p>
                    </div>
                </header>
                <div className="container">
                    <div
                        className="grid grid-rows-1 grid-cols-4 gap-5"
                        style={{
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                            gridTemplateRows: "auto",
                        }}
                    >
                        <section className="col-span-4 md:col-span-1">
                            <div
                                className="p-1 pb-5"
                                style={{
                                    position: "sticky",
                                    top: "1.25rem",
                                    maxHeight: "calc(100vh - 3rem)",
                                    overflow: "scroll",
                                }}
                            >
                                <h2 className="uppercase text-blue-500 text-base bg-transparent p-0">
                                    Contents
                                </h2>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.post.tableOfContents,
                                    }}
                                />
                            </div>
                        </section>

                        <div className="col-span-4 md:col-span-3">
                            <section
                                className="post text-lg"
                                dangerouslySetInnerHTML={{
                                    __html: props.post.html,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </article>
            <div className="container md:flex mt-10">
                <div className="w-full md:w-1/2 mb-10 md:mb-0 md:mr-5">
                    {props.previous && (
                        <PostLink post={props.previous} headingSize={2} />
                    )}
                </div>
                <div className="w-full md:w-1/2 md:ml-5">
                    {props.next && (
                        <PostLink post={props.next} headingSize={2} />
                    )}
                </div>
            </div>
        </>
    );
};
