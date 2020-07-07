import React from "react";

import { ITableOfContents } from "../types";
import { generateTableOfContentsListItems } from "../utils/table-of-contents";

interface IProps {
    data: ITableOfContents;
}

export class TableOfContents extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="toc">
                <ol>{this.props.data.map(generateTableOfContentsListItems)}</ol>
            </div>
        );
    }
}
