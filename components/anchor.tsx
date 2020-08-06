import React from "react";
import Link from "next/link";

interface IProps {
    href: string;
    as?: string;
    isExternalLink: boolean;
    isLinkButton: boolean;
    className?: string;
}

export class Anchor extends React.PureComponent<IProps> {
    public static defaultProps: IProps = {
        href: "/",
        isExternalLink: false,
        isLinkButton: false,
    };

    render() {
        const className = `${
            this.props.isLinkButton ? "c-link-button" : "c-link"
        } ${this.props.className || ""}`;
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
            <Link href={this.props.href} as={this.props.as}>
                <a className={className}>{this.props.children}</a>
            </Link>
        );
    }
}
