import React from "react";
import Link from "next/link";

import { IPost } from "../types";

interface IProps {
    post: IPost;
    headingSize: 2 | 3;
    classNames?: string;
}

export const PostLink: React.StatelessComponent<IProps> = (props) => (
    <>
        <Link href={`/post/[id]`} as={`/post/${props.post.id}`}>
            <a className={`c-post-link ${props.classNames || ""}`}>
                {props.headingSize === 2 && (
                    <h2 className="c-post-link__heading">
                        {props.post.meta.title}
                    </h2>
                )}
                {props.headingSize === 3 && (
                    <h3 className=" c-post-link__heading">
                        {props.post.meta.title}
                    </h3>
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
                <p className="mb-0">{props.post.meta.description}</p>
            </a>
        </Link>
    </>
);
