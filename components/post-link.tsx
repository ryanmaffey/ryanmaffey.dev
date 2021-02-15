import React from "react";
import Link from "next/link";

import { IPost } from "../types";
import { Anchor } from "./anchor";
import { SERIES_ID_MAP } from "../constants/series";
import { formatDate } from "../utils/formatDate";
import { TagList } from "./tag-list";

interface IProps {
    post: IPost;
    headingSize: 2 | 3;
    classNames?: string;
    showTags?: boolean;
}

export const PostLink: React.FC<IProps> = (props) => (
    <div className={`c-post-link ${props.classNames || ""}`}>
        <Link href={`/post/[id]`} as={`/post/${props.post.id}`}>
            <a className="c-post-link__anchor inline-block">
                {props.headingSize === 2 && (
                    <h2 className="c-post-link__heading mb-2">
                        {props.post.meta.title}
                    </h2>
                )}
                {props.headingSize === 3 && (
                    <h3 className="c-post-link__heading mb-2">
                        {props.post.meta.title}
                    </h3>
                )}
            </a>
        </Link>
        <div className="mb-2 text-gray-500 text-sm">
            <time dateTime={props.post.meta.date}>
                {formatDate(new Date(props.post.meta.date))}
            </time>{" "}
            &nbsp; | &nbsp; <span>{props.post.meta.readTime} min read</span>
        </div>
        <p className="mb-0">{props.post.meta.description}</p>
        {props.post.meta.series && (
            <Anchor
                href={`/series/${props.post.meta.series}`}
                className="mt-4 inline-block"
            >
                Read more in the "{SERIES_ID_MAP[props.post.meta.series]}"
                series
            </Anchor>
        )}
        {props.showTags && props.post.meta.tags && (
            <>
                <div className="mt-4" />
                <TagList tags={props.post.meta.tags} />
            </>
        )}
    </div>
);
