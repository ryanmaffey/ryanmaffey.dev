import React from "react";
import Link from "next/link";
import { formatDate } from "../../utils/formatDate";
import { SERIES_ID_MAP } from "../../constants/series";
import { IPost } from "../../types";
import { Anchor } from "../site/Anchor";
import { TagList } from "../tags";

interface IProps {
    post: IPost;
    headingSize: 2 | 3;
    classNames?: string;
    showTags?: boolean;
    showSeriesLink?: boolean;
}

export const PostLink: React.FC<IProps> = (props) => (
    <div className={`c-post-link ${props.classNames || ""}`}>
        <Link href={`/post/[slug]`} as={`/post/${props.post.slug}`}>
            <a className="c-post-link__anchor inline-block">
                {props.headingSize === 2 && (
                    <h2 className="c-post-link__heading mb-2">
                        {props.post.title}
                    </h2>
                )}
                {props.headingSize === 3 && (
                    <h3 className="c-post-link__heading mb-2">
                        {props.post.title}
                    </h3>
                )}
            </a>
        </Link>
        <div className="mb-2 text-gray-500 text-sm">
            <time dateTime={props.post.publishDate}>
                {formatDate(new Date(props.post.publishDate))}
            </time>{" "}
            &nbsp; | &nbsp; <span>{props.post.readTime} min read</span>
        </div>
        <p className="mb-0">{props.post.description}</p>
        {props.showTags && props.post.tags && (
            <>
                <div className="mt-4" />
                <TagList tags={props.post.tags} />
            </>
        )}
        {props.showSeriesLink && props.post.series && (
            <Anchor
                href={`/series/${props.post.series}`}
                className="mt-4 inline-block"
            >
                See all posts in the "{SERIES_ID_MAP[props.post.series]}" series
            </Anchor>
        )}
    </div>
);
