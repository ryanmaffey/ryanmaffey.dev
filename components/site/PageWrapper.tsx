import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const KEYWORDS = [
    "developer",
    "development",
    "software",
    "program",
    "programming",
    "programmer",
    "web",
    "website",
    "blog",
    "article",
    "post",
    "tech",
    "technology",
    "code",
    "coding",
    "career",
];

export const PageWrapper: React.FunctionComponent<{
    title: string;
    description: string;
    keywords?: string[];
}> = (props) => {
    const router = useRouter();

    return (
        <>
            <Head>
                {/* Icons and Theme */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#8a3ffc"
                />
                <meta name="msapplication-TileColor" content="#603cba" />
                <meta name="theme-color" content="#ffffff" />

                {/* Meta */}
                <meta name="description" content={props.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content={props.description} />
                <meta
                    name="keywords"
                    content={[...KEYWORDS, ...(props.keywords ?? [])].join(
                        ", "
                    )}
                />

                {/* OG */}
                <meta property="og:locale" content="en_UK" />
                <meta
                    property="og:url"
                    content={`https://ryanmaffey.dev${router.asPath}`}
                />
                <meta name="og:title" content={props.title} />
                <meta name="og:description" content={props.description} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={
                        props.title === "" ? "ryanmaffey.dev" : props.title
                    }
                />
                <meta
                    property="og:image"
                    content="https://ryanmaffey.dev/android-chrome-192x192.png"
                ></meta>

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta
                    property="twitter:url"
                    content={`https://ryanmaffey.dev${router.asPath}`}
                />
                <meta
                    name="twitter:title"
                    content={
                        props.title === "" ? "ryanmaffey.dev" : props.title
                    }
                />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:creator" content="@ryanmaffey" />
                <meta name="twitter:site" content="@ryanmaffey" />
                <meta
                    name="twitter:image"
                    content="https://ryanmaffey.dev/android-chrome-192x192.png"
                />
                <meta property="twitter:domain" content="ryanmaffey.dev" />

                {/* Title */}
                <title>{props.title}</title>
            </Head>
            <div
                className="grid text-gray-300"
                style={{
                    gridTemplateRows: "auto 1fr auto",
                    gridTemplateColumns: "100%",
                    minHeight: "100vh",
                }}
            >
                <Nav />
                <main id="content">{props.children}</main>
                <Footer />
            </div>
        </>
    );
};

export default PageWrapper;
