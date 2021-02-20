import React from "react";
import { IPage } from "../../types";
import PageWrapper from "../site/PageWrapper";
import { TitleHeader } from "../site/TitleHeader";

export const BasicPage: React.FC<{ page: IPage }> = (props) => (
    <PageWrapper
        title={props.page.title}
        description={props.page.metaDescription}
    >
        <TitleHeader>
            <h1 className="m-0">{props.page.title}</h1>
            <p>{props.page.description}</p>
        </TitleHeader>
        <div className="container page">
            <section dangerouslySetInnerHTML={{ __html: props.page.body }} />
        </div>
    </PageWrapper>
);
