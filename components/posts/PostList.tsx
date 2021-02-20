import React from "react";

import { IPost } from "../../types";
import { PostLink } from "./PostLink";

interface IProps {
    posts: IPost[];
    headingSize: 2 | 3;
    showTags?: boolean;
    showSeriesLink?: boolean;
}

export const PostList: React.FC<IProps> = (props) => (
    <ol>
        {props.posts.map((p, i) => (
            <li
                key={p.slug}
                className={`${i < props.posts.length - 1 && "mb-10 md:mb-12"}`}
            >
                <PostLink
                    post={p}
                    headingSize={props.headingSize}
                    showTags={props.showTags}
                    showSeriesLink={props.showSeriesLink}
                />
            </li>
        ))}
    </ol>
);
