import React from "react";
import Link from "next/link";

interface IProps {
    name: string;
    size: "md" | "lg";
}

export const Tag: React.FC<IProps> = ({ name = "", size = "md" }) => (
    <Link as={`/tag/${name}`} href="/tag/[tag]">
        <a className={`${"c-tag"} c-tag--${size}`}>{name}</a>
    </Link>
);
