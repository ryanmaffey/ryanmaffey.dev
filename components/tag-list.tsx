import React from "react";
import { Tag } from "./tag";

interface IProps {
    tags: string[];
    className?: string;
}

export class TagList extends React.PureComponent<IProps> {
    render() {
        const className = `${"c-tag-list"} ${this.props.className || ""}`;

        return (
            <ul className={className}>
                {this.props.tags.sort().map((t) => (
                    <li key={t}>
                        <Tag name={t} />
                    </li>
                ))}
            </ul>
        );
    }
}
