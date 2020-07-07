import React from "react";

import { Anchor } from "./anchor";

interface IProps {
    href: string;
    className?: string;
}

export class LinkButton extends React.PureComponent<IProps> {
    render() {
        return (
            <Anchor
                href={this.props.href}
                className={
                    "border border-teal-400 hover:text-teal-400 focus:text-teal-400 rounded mt-2 py-2 px-3 inline-block outline-none " +
                        this.props.className ?? ""
                }
            >
                {this.props.children}
            </Anchor>
        );
    }
}
