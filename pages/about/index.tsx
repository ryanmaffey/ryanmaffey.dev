import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import PageWrapper from "../../components/site/PageWrapper";
import { SidebarLayout } from "../../components/layouts/SidebarLayout";
import { IPage } from "../../types/page";
import { TitleHeader } from "../../components/site/TitleHeader";
import { IToCItem } from "../../types";
import { getPage } from "../../utils/page";
import { TableOfContents } from "../../components/table-of-contents";
import { getTableOfContentsFromMarkdown } from "../../utils/toc";

interface IProps {
    page: IPage;
    tocItems: IToCItem[];
}

const AboutPage: React.FC<IProps> = (props) => {
    return (
        <PageWrapper
            title={props.page.title}
            description={props.page.metaDescription}
        >
            <TitleHeader>
                <h1 className="m-0">{props.page.title}</h1>
                <p>{props.page.description}</p>
            </TitleHeader>
            <div className="page">
                <SidebarLayout
                    side={() => <TableOfContents items={props.tocItems} />}
                    main={() => (
                        <div
                            className="mb-8"
                            dangerouslySetInnerHTML={{
                                __html: props.page.body,
                            }}
                        />
                    )}
                />
            </div>
        </PageWrapper>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async (): Promise<
    GetStaticPropsResult<IProps>
> => {
    const page = await getPage("about");
    return {
        props: {
            page,
            tocItems: await getTableOfContentsFromMarkdown(page.body),
        },
    };
};

export default AboutPage;
