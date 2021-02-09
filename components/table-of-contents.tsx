import React from "react";

export const TableOfContents: React.FC<{
    html: string;
}> = (props) => (
    <div
        className="p-1 pb-8 mb-4 md:mb-0 overflow-auto sticky border-b-2 md:border-b-0 border-purple-700"
        style={{
            top: "1.25rem",
            maxHeight: "calc(100vh - 3rem)",
        }}
    >
        <h2 className="uppercase text-primary text-base bg-transparent p-0">
            Contents
        </h2>
        <div
            dangerouslySetInnerHTML={{
                __html: props.html,
            }}
        />
    </div>
);
