import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import PageWrapper from "../../components/site/PageWrapper";
import { getLatestPostsData, getAllPosts } from "../../utils/posts";
import { PostList } from "../../components/posts/PostList";
import { IPost } from "../../types";
import { TitleHeader } from "../../components/site/TitleHeader";
import { PAGE_SIZE } from "../../constants/pagination";

interface IProps {
    latestPosts: IPost[];
    pageCount: number;
}

const PostsPage: React.FC<IProps> = (props) => {
    const [state, setState] = React.useState({
        posts: props.latestPosts,
        page: 0,
    });

    const fetchMorePosts = async () => {
        const nextPage = state.page + 1;
        const yScrollPosition = window.scrollY;
        try {
            const newPosts: IPost[] = await (
                await fetch(`/api/posts-${nextPage}.json`)
            ).json();
            setState({
                ...state,
                posts: [...state.posts, ...newPosts],
                page: nextPage,
            });
        } catch (ex) {}
        window.scrollTo(0, yScrollPosition);
    };

    return (
        <PageWrapper
            title="Posts"
            description="Here are all my latest blog posts for you to browse and enjoy! I love to write about web technologies, programming and software development."
        >
            <TitleHeader>
                <h1 className="m-0">Posts</h1>
                <p>Here are all my blog posts for you to browse and enjoy.</p>
            </TitleHeader>
            <div className="container">
                <PostList
                    posts={state.posts}
                    headingSize={2}
                    showTags
                    showSeriesLink
                />
                {props.pageCount > state.page + 1 && (
                    <div className="flex justify-center mt-8">
                        <button
                            className="c-link-button"
                            onClick={fetchMorePosts}
                        >
                            Load more posts
                        </button>
                    </div>
                )}
            </div>
        </PageWrapper>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async (): Promise<
    GetStaticPropsResult<IProps>
> => ({
    props: {
        latestPosts: getLatestPostsData(PAGE_SIZE),
        pageCount: Math.ceil(getAllPosts().length / PAGE_SIZE),
    },
});

export default PostsPage;
