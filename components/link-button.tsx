import React from "react";

import { Anchor } from "./anchor";

interface IProps {
    href: string;
    className?: string;
}

export class LinkButton extends React.PureComponent<IProps> {
    render() {
        return (
            <Anchor href={this.props.href} className="font-bold px-3 py-2">
                {this.props.children}
            </Anchor>
        );
    }
}
