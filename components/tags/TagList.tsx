import React from "react";
import { Tag } from "./Tag";

interface IProps {
    tags: string[];
    tagSize?: "md" | "lg";
    className?: string;
}

export const TagList: React.FC<IProps> = ({
    tagSize = "md",
    tags = [],
    className = undefined,
}) => (
    <ul className={`${"c-tag-list"} ${className || ""}`}>
        {tags.map((t) => (
            <li key={t}>
                <Tag name={t} size={tagSize} />
            </li>
        ))}
    </ul>
);
