import React from "react";
import Link from "next/link";

import { IPost } from "../types";
import { Anchor } from "./anchor";

interface IProps {
    post: IPost;
    headingSize: 2 | 3;
    classNames?: string;
}

export const PostLink: React.StatelessComponent<IProps> = (props) => (
    <div className={`c-post-link ${props.classNames || ""}`}>
        <Link href={`/post/[id]`} as={`/post/${props.post.id}`}>
            <a>
                {props.headingSize === 2 && (
                    <h2 className="text-xl">{props.post.meta.title}</h2>
                )}
                {props.headingSize === 3 && (
                    <h3 className="text-xl">{props.post.meta.title}</h3>
                )}
                <div className="mb-4 text-gray-500 font-bold text-sm">
                    <time
                        dateTime={props.post.meta.date
                            .split("/")
                            .reverse()
                            .join("-")}
                    >
                        {props.post.meta.date}
                    </time>
                    &nbsp;
                    <span>(approx. {props.post.meta.readTime} min read)</span>
                </div>
                <p>{props.post.meta.description}</p>
            </a>
        </Link>
        <Anchor href={`/post/[id]`} as={`/post/${props.post.id}`} isLinkButton>
            Read more
        </Anchor>
    </div>
);
