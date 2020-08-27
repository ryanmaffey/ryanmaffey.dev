import React from "react";
import Head from "next/head";

import { Nav } from "./nav";
import { Footer } from "./footer";

export const siteTitle = "Ryan Maffey Blog";

const description =
    "I'm a professional Front-End Web Developer / Software Engineer working in Bournemouth, UK who loves creating applications for the web and teaching others how to do the same.";

export const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content={description} />
                <meta name="twitter:creator" content="@ryanmaffey" />
            </Head>
            <div
                className="grid min-h-full text-gray-300"
                style={{
                    gridTemplateRows: "auto 1fr auto",
                    gridTemplateColumns: "100%",
                }}
            >
                <Nav />
                <main id="content">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
