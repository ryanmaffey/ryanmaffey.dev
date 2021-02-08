import React from "react";

import { PostLink } from "./post-link";
import { IPost } from "../types";

interface IProps {
    posts: IPost[];
    headingSize: 2 | 3;
}

export const PostList: React.FC<IProps> = (props) => (
    <ol>
        {props.posts.map((p, i) => (
            <li
                key={p.id}
                className={`${i < props.posts.length - 1 && "mb-10 md:mb-12"}`}
            >
                <PostLink post={p} headingSize={props.headingSize} />
            </li>
        ))}
    </ol>
);
