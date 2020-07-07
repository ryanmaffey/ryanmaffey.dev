import React from "react";
import Head from "next/head";

import { siteTitle } from "./layout";
import { loadCssAsync } from "../utils";
import { Anchor } from "./anchor";
import { IPost } from "../types/post";
import { TableOfContents } from "./table-of-contents";

export const Post: React.FunctionComponent<{ post: IPost }> = (props) => {
    React.useEffect(() => {
        if (!props.post.meta.containsCodeBlocks) {
            return;
        }

        loadCssAsync(
            "https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism-tomorrow.min.css"
        );
    }, []);

    const [contentsVisible, setContentsVisible] = React.useState(true);

    return (
        <>
            <Head>
                <title>{props.post.meta.title + " | " + siteTitle}</title>
            </Head>
            <div className="container">
                <article
                    className="grid grid-rows-2 grid-cols-3 gap-5"
                    style={{
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridTemplateRows: "1fr auto",
                    }}
                >
                    <header className="col-span-3 bg-gray-800 p-5 rounded">
                        <h1>{props.post.meta.title}</h1>
                        <p className="text-xs">
                            <time
                                className="text-xs"
                                dateTime={props.post.meta.date
                                    .split("/")
                                    .reverse()
                                    .join("-")}
                            >
                                {props.post.meta.date}
                            </time>{" "}
                            &nbsp; (approx. {props.post.meta.readTime} min read)
                        </p>
                    </header>

                    <section className="col-span-3 md:col-span-1">
                        <div
                            className="bg-gray-800 p-5 rounded"
                            style={{ position: "sticky", top: "1.25rem" }}
                        >
                            <div
                                className={`flex justify-between ${
                                    contentsVisible && "mb-5"
                                }`}
                            >
                                <h2 className="m-0">Contents</h2>
                                <button
                                    className="px-5 text-3xl"
                                    onClick={() =>
                                        setContentsVisible(!contentsVisible)
                                    }
                                >
                                    {contentsVisible ? "-" : "+"}
                                </button>
                            </div>
                            {contentsVisible && (
                                <TableOfContents
                                    data={props.post.tableOfContents}
                                />
                            )}
                        </div>
                    </section>

                    <div className="col-span-3 md:col-span-2">
                        <section
                            className="bg-gray-800 p-5 rounded"
                            dangerouslySetInnerHTML={{
                                __html: props.post.html,
                            }}
                        />

                        <footer className="rounded overflow-hidden shadow-lg bg-gray-800 p-5 mt-6">
                            <p>
                                <span className="mr-2">🎉</span>Hooray, you made
                                it to the end...thanks for reading! If you
                                enjoyed this post, found it useful and/or have
                                any feedback on how it can be improved please
                                feel free to{" "}
                                <Anchor
                                    href="https://twitter.com/ryanmaffey?lang=en"
                                    isExternalLink
                                >
                                    get in touch on Twitter (@ryanmaffey)
                                </Anchor>
                            </p>
                        </footer>
                    </div>
                </article>
            </div>
        </>
    );
};
