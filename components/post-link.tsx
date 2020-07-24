import React from "react";
import Link from "next/link";

import { IPost } from "../types";

interface IProps {
    post: IPost;
    headingSize: 2 | 3;
}

export const PostLink: React.StatelessComponent<IProps> = (props) => (
    <Link href={`/post/[id]`} as={`/post/${props.post.id}`}>
        <a className="block h-full p-5 rounded border border-transparent border-solid hover:border-teal-400 focus:border-teal-400 outline-none">
            {props.headingSize === 2 && (
                <h2 className="text-xl">{props.post.meta.title}</h2>
            )}
            {props.headingSize === 3 && (
                <h3 className="text-xl">{props.post.meta.title}</h3>
            )}
            <div className="mb-2">
                <time
                    className="text-sm"
                    dateTime={props.post.meta.date
                        .split("/")
                        .reverse()
                        .join("-")}
                >
                    {props.post.meta.date}
                </time>
                &nbsp;
                <span className="text-sm">
                    (approx. {props.post.meta.readTime} min read)
                </span>
            </div>
            <p>{props.post.meta.description}</p>
        </a>
    </Link>
);

// {% for tag in post.data.tags %}
//     {%- if collections.tagList.indexOf(tag) != -1 -%}
//     {% set tagUrl %}/tags/{{ tag }}/{% endset %}
//     {% tag tagUrl | url , tag %}
//     {%- endif -%}
// {% endfor %}
