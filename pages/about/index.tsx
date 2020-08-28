import React from "react";

import Layout from "../../components/layout";
import { IPost } from "../../types";
import { Anchor } from "../../components/anchor";
import { SidebarLayout } from "../../components/layout/sidebar-layout";
import { getPage } from "../../lib/page";
import { IPage } from "../../types/page";
import { TableOfContents } from "../../components/table-of-contents";
import { TitleHeader } from "../../components/title-header";

interface IProps {
    page: IPage;
}

const AboutPage: React.StatelessComponent<IProps> = (props) => {
    return (
        <Layout
            title="About Me"
            description="I'm Ryan, a professional Front-End Web Developer working in Bournemouth. Here you can find a bit more about me and what I can do."
        >
            <TitleHeader>
                <h1 className="m-0">About Me</h1>
            </TitleHeader>
            <div className="page">
                <SidebarLayout
                    side={() => (
                        <TableOfContents html={props.page.tableOfContents} />
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
