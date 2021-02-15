import React from "react";

const getClassName = (num: number) => {
    switch (num) {
        case 1:
            return "ml-4 text-sm";
        case 2:
            return "ml-8 text-sm";
        default:
            return "";
    }
};

export const TableOfContents: React.FC<{
    items: { text: string; id: string; level: number }[];
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
        <ul className="toc">
            {props.items.map((item) => (
                <li key={item.id}>
                    <a
                        href={`#${item.id}`}
                        className={getClassName(item.level)}
                    >
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);
