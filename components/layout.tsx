import React from "react";
import Head from "next/head";

import { Nav } from "./nav";
import { Footer } from "./footer";

export const Layout: React.FunctionComponent<{
    title: string;
    description: string;
}> = (props) => {
    return (
        <>
            <Head>
                {/* Icons */}
                <link rel="icon" href="/favicon.ico" />

                {/* Meta */}
                <meta name="description" content={props.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content={props.description} />

                {/* OG */}
                <meta name="og:title" content={props.title} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content={props.title ?? "ryanmaffey.dev"}
                />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:creator" content="@ryanmaffey" />
                <meta name="twitter:site" content="@ryanmaffey" />
                <meta name="twitter:image" content="/img/ryanmaffey-md.webp" />

                {/* Title */}
                <title>
                    {props.title === "" ? "" : `${props.title} | `}
                    ryanmaffey.dev
                </title>
            </Head>
            <div
                className="grid min-h-full text-gray-300"
                style={{
                    gridTemplateRows: "auto 1fr auto",
                    gridTemplateColumns: "100%",
                }}
            >
                <Nav />
                <main id="content">{props.children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
