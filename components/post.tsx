import React from "react";
import fetch from "isomorphic-fetch";

import { loadCssAsync } from "../utils";
import { IPost } from "../types/post";
import { PostLink } from "./post-link";
import { SidebarLayout } from "./layout/sidebar-layout";
import { TableOfContents } from "./table-of-contents";
import { TitleHeader } from "./title-header";

interface ILike {
    post_id: string;
    like_count: number;
}

export const Post: React.FunctionComponent<{
    post: IPost;
    next: IPost | null;
    previous: IPost | null;
}> = (props) => {
    const [state, setState] = React.useState<{
        likes: number | null;
        prevLikes: number | null;
        nextLikes: number | null;
    }>({
        likes: null,
        prevLikes: null,
        nextLikes: null,
    });

    React.useEffect(() => {
        fetch("https://ryanmaffey-dev.herokuapp.com/likes")
            .then((x) => x.json())
            .then((x: ILike[]) => {
                var likes = x.filter((y) => y.post_id === props.post.id)[0]
                    ?.like_count;
                var prevLikes = x.filter(
                    (y) => y.post_id === props.previous?.id
                )[0]?.like_count;
                var nextLikes = x.filter((y) => y.post_id === props.next?.id)[0]
                    ?.like_count;

                setState({
                    likes,
                    prevLikes,
                    nextLikes,
                });
            });
    }, []);

    React.useEffect(() => {
        if (!props.post.meta.containsCodeBlocks) {
            return;
        }

        loadCssAsync(
            "https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism-tomorrow.min.css"
        );
    }, []);
    // <>
    //     <article>
    //         <header className="py-8 md:py-20 mb-8 bg-gray-900 text-center">
    //             <div className="container">
    //                 <h1>{props.post.meta.title}</h1>
    //                 <p className="text-sm mb-0 text-gray-500">
    //                     <time
    //                         className="text-sm"
    //                         dateTime={props.post.meta.date
    //                             .split("/")
    //                             .reverse()
    //                             .join("-")}
    //                     >
    //                         {props.post.meta.date}
    //                     </time>{" "}
    //                     &nbsp; | &nbsp; {props.post.meta.readTime} min read
    //                     &nbsp; | &nbsp; {state.likes} like
    //                     {state.likes === 1 ? "" : "s"}
    //                 </p>
    //             </div>
    //         </header>
    //         <div className="container">
    //             <div
    //                 className="grid grid-rows-1 grid-cols-4 gap-4"
    //                 style={{
    //                     gridTemplateColumns: "1fr 1fr 1fr 1fr",
    //                     gridTemplateRows: "auto",
    //                 }}
    //             >
    //                 <section className="col-span-4 md:col-span-1">
    //                     <div
    //                         className="p-1 pb-4"
    //                         style={{
    //                             position: "sticky",
    //                             top: "1.25rem",
    //                             maxHeight: "calc(100vh - 3rem)",
    //                             overflow: "scroll",
    //                         }}
    //                     >
    //                         <h2 className="uppercase text-orange-400 text-base bg-transparent p-0">
    //                             Contents
    //                         </h2>
    //                         <div
    //                             dangerouslySetInnerHTML={{
    //                                 __html: props.post.tableOfContents,
    //                             }}
    //                         />
    //                     </div>
    //                 </section>

    //                 <div className="col-span-4 md:col-span-3">
    //                     <section
    //                         className="post text-lg"
    //                         dangerouslySetInnerHTML={{
    //                             __html: props.post.html,
    //                         }}
    //                     />
    //                     <LikePost
    //                         postId={props.post.id}
    //                         likes={state.likes}
    //                         onLike={() =>
    //                             setState({
    //                                 ...state,
    //                                 likes: (state.likes as number) + 1,
    //                             })
    //                         }
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     </article>
    //     <div className="container md:flex mt-8">
    //         <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4">
    //             {props.previous && (
    //                 <PostLink
    //                     likes={state.prevLikes ?? 0}
    //                     post={props.previous}
    //                     headingSize={2}
    //                 />
    //             )}
    //         </div>
    //         <div className="w-full md:w-1/2 md:ml-4">
    //             {props.next && (
    //                 <PostLink
    //                     likes={state.nextLikes ?? 0}
    //                     post={props.next}
    //                     headingSize={2}
    //                 />
    //             )}
    //         </div>
    //     </div>
    // </>

    return (
        <article>
            <TitleHeader>
                <h1>{props.post.meta.title}</h1>
                <p className="text-sm mb-0 text-gray-500">
                    <time
                        className="text-sm"
                        dateTime={props.post.meta.date
                            .split("/")
                            .reverse()
                            .join("-")}
                    >
                        {props.post.meta.date}
                    </time>{" "}
                    &nbsp; | &nbsp; {props.post.meta.readTime} min read &nbsp; |
                    &nbsp; {state.likes} like
                    {state.likes === 1 ? "" : "s"}
                </p>
            </TitleHeader>
            <SidebarLayout
                side={() => (
                    <TableOfContents html={props.post.tableOfContents} />
                )}
                main={() => (
                    <>
                        <section
                            className="post text-lg"
                            dangerouslySetInnerHTML={{
                                __html: props.post.html,
                            }}
                        />
                        <LikePost
                            postId={props.post.id}
                            likes={state.likes}
                            onLike={() =>
                                setState({
                                    ...state,
                                    likes: (state.likes as number) + 1,
                                })
                            }
                        />
                    </>
                )}
            />
            <div className="container md:flex mt-8">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4">
                    {props.previous && (
                        <PostLink
                            likes={state.prevLikes ?? 0}
                            post={props.previous}
                            headingSize={2}
                        />
                    )}
                </div>
                <div className="w-full md:w-1/2 md:ml-4">
                    {props.next && (
                        <PostLink
                            likes={state.nextLikes ?? 0}
                            post={props.next}
                            headingSize={2}
                        />
                    )}
                </div>
            </div>
        </article>
    );
};

const LikePost: React.FunctionComponent<{
    postId: string;
    likes: number | null;
    onLike: () => void;
}> = (props) => {
    if (props.likes == null) {
        return <></>;
    }

    const [liked, setLiked] = React.useState(false);

    const onLikePostClick = () => {
        if (liked) return;

        fetch("https://ryanmaffey-dev.herokuapp.com/like/" + props.postId)
            .then((x) => x.json())
            .then((x) => {
                setLiked(x === true);
                props.onLike();
            });
    };

    return (
        <div className="flex items-center mt-8 bg-gray-900 rounded p-8">
            <div>
                <button
                    className={
                        "c-icon-button c-icon-button--red" +
                        (liked ? " c-icon-button--active" : " ")
                    }
                    onClick={onLikePostClick}
                >
                    <svg
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative"
                        style={{ top: "0.1em" }}
                    >
                        <path
                            className="c-icon-button__inactive-path"
                            fillRule="evenodd"
                            d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                        />
                        <path
                            className="c-icon-button__active-path"
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                    </svg>
                </button>
            </div>
            <div className="ml-4">
                <p className="mb-0">
                    {props.likes ? props.likes : "0"} like
                    {props.likes === 1 ? "" : "s"}
                    {!props.likes && ' - be the first to "like" this post!'}
                </p>
            </div>
        </div>
    );
};
