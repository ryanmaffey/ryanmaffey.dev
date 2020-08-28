import { getStaticProps } from "../pages";

import React from "react";

export const TitleHeader: React.StatelessComponent = (props) => (
    <header className="py-8 md:py-20 mb-8 bg-gray-900 text-center">
        <div className="container">{props.children}</div>
    </header>
);
