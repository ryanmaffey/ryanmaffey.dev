import React from "react";

import Layout from "../../components/layout";
import { getAllTags } from "../../lib/posts";
import { TitleHeader } from "../../components/title-header";
import { TagList } from "../../components/tag-list";

interface IProps {
    tags: string[];
}

const TagsPage: React.FC<IProps> = (props) => {
    const title = "Tags";
    const text =
        "Click on a topic you're interested in to see the relevant posts.";
    return (
        <Layout title={title} description={text}>
            <TitleHeader>
                <h1 className="m-0">{title}</h1>
                <p>{text}</p>
            </TitleHeader>
            <div className="container">
                <TagList tags={props.tags} tagSize="lg" />
            </div>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: IProps }> => {
    const tags = await getAllTags();
    return {
        props: {
            tags,
        },
    };
};

export default TagsPage;
