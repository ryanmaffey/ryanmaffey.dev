import React from "react";
import Link from "next/link";

interface IProps {
    href: string;
    isExternalLink: boolean;
    className?: string;
}

export class Anchor extends React.PureComponent<IProps> {
    public static defaultProps: IProps = {
        href: "/",
        isExternalLink: false,
    };

    render() {
        const className = `c-anchor ${this.props.className}`;
        if (this.props.isExternalLink) {
            return (
                <a
                    href={this.props.href}
                    target="_blank"
                    rel="noopener"
                    className={className}
                >
                    {this.props.children}
                </a>
            );
        }

        return (
            <Link href={this.props.href}>
                <a className={className}>{this.props.children}</a>
            </Link>
        );
    }
}
