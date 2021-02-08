import React from "react";

import { PostLink } from "./post-link";
import { IPost } from "../types";

interface IProps {
    posts: IPost[];
    headingSize: 2 | 3;
}

export const PostList: React.FunctionComponent<IProps> = (props) => (
    <ol>
        {props.posts.map((p) => (
            <li key={p.id}>
                <PostLink post={p} headingSize={props.headingSize} />
            </li>
        ))}
    </ol>
);
