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
                    "font-bold hover:text-orange-500 focus:text-orange-500" +
                        this.props.className ?? ""
                }
            >
                {this.props.children}
            </Anchor>
        );
    }
}
