import React from "react";
import Link from "next/link";

import { IPost } from "../types";
import { Tag } from "./tag";

interface IProps {
    post: IPost;
    headingSize: 2 | 3;
    classNames?: string;
}

export const PostLink: React.FC<IProps> = (props) => (
    <div className={`c-post-link ${props.classNames || ""}`}>
        <Link href={`/post/[id]`} as={`/post/${props.post.id}`}>
            <a className="c-post-link__anchor">
                {props.headingSize === 2 && (
                    <h2 className="c-post-link__heading text-2xl mb-4">
                        {props.post.meta.title}
                    </h2>
                )}
                {props.headingSize === 3 && (
                    <h3 className=" c-post-link__heading text-2xl mb-4">
                        {props.post.meta.title}
                    </h3>
                )}
                <div className="mb-4 text-gray-500 text-sm">
                    <time dateTime={props.post.meta.date}>
                        {props.post.meta.date.split("-").reverse().join("/")}
                    </time>{" "}
                    &nbsp; | &nbsp;{" "}
                    <span>{props.post.meta.readTime} min read</span>
                </div>
                <p>{props.post.meta.description}</p>
            </a>
        </Link>
        {props.post.meta.tags?.map((tag) => (
            <Tag name={tag} key={tag} className="c-tag--light mb-0" />
        ))}
    </div>
);
