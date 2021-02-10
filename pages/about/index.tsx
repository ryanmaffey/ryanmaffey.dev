import React from "react";

import Layout from "../../components/layout";
import { SidebarLayout } from "../../components/layout/sidebar-layout";
import { getPage } from "../../lib/page";
import { IPage } from "../../types/page";
import { TableOfContentsHtml } from "../../components/table-of-contents-html";
import { TitleHeader } from "../../components/title-header";

interface IProps {
    page: IPage;
}

const AboutPage: React.FC<IProps> = (props) => {
    return (
        <Layout
            title="About"
            description="I'm Ryan, a professional Front-End Web Developer working in Bournemouth. Here you can find a bit more about me and what I can do."
        >
            <TitleHeader>
                <h1 className="m-0">About</h1>
                <p>
                    Here's a bit more about me, my experience and what I can do!
                </p>
            </TitleHeader>
            <div className="page">
                <SidebarLayout
                    side={() => (
                        <TableOfContentsHtml
                            html={props.page.tableOfContents}
                        />
                    )}
                    main={() => (
                        <div
                            className="mb-8"
                            dangerouslySetInnerHTML={{
                                __html: props.page.html,
                            }}
                        ></div>
                    )}
                />
            </div>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: IProps }> => {
    const page = await getPage("pages/about", "about");
    return {
        props: {
            page,
        },
    };
};

export default AboutPage;
