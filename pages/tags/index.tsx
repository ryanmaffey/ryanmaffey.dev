import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import PageWrapper from "../../components/site/PageWrapper";
import { getAllTags } from "../../utils/tags";
import { TitleHeader } from "../../components/site/TitleHeader";
import { TagList } from "../../components/tags/TagList";

interface IProps {
    tags: string[];
}

const TagsPage: React.FC<IProps> = (props) => {
    const title = "Tags";
    const text =
        "Click on a topic you're interested in to see the relevant posts.";
    return (
        <PageWrapper title={title} description={text}>
            <TitleHeader>
                <h1 className="m-0">{title}</h1>
                <p>{text}</p>
            </TitleHeader>
            <div className="container">
                <TagList tags={props.tags} tagSize="lg" />
            </div>
        </PageWrapper>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async (): Promise<
    GetStaticPropsResult<IProps>
> => ({
    props: {
        tags: getAllTags(),
    },
});

export default TagsPage;
