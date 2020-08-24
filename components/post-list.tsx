import React from "react";

import { PostLink } from "./post-link";
import { IPost } from "../types";

interface IProps {
    posts: IPost[];
    headingSize: 2 | 3;
}

export class PostList extends React.PureComponent<IProps> {
    render() {
        return (
            <ol className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {this.props.posts.map((p) => (
                    <li key={p.id}>
                        <PostLink
                            post={p}
                            headingSize={this.props.headingSize}
                        />
                    </li>
                ))}
            </ol>
        );
    }
}
