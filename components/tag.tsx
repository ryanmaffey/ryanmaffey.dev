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
            <Link href={`/tag/${this.props.name}`}>
                <a className={className}>#{this.props.name}</a>
            </Link>
        );
    }
}
