import React from "react";
import Link from "next/link";

interface IProps {
    name: string;
    className?: string;
}

export class Tag extends React.PureComponent<IProps> {
    render() {
        const className = `${"c-tag"} ${this.props.className || ""}`;

        return (
            <Link as={`/tag/${this.props.name}`} href="/tag/[tag]">
                <a className={className}>#{this.props.name}</a>
            </Link>
        );
    }
}
