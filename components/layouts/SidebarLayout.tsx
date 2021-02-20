import React from "react";

export const SidebarLayout: React.FC<{
    side: React.FC;
    main: React.FC;
    sidebarPosition?: "left" | "right";
}> = ({ sidebarPosition = "left", ...props }) => {
    return (
        <div className="container">
            <div
                className="grid grid-rows-1 grid-cols-4 gap-4"
                style={{
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "auto",
                }}
            >
                {sidebarPosition === "left" && (
                    <section className="col-span-3 md:col-span-1">
                        <props.side />
                    </section>
                )}

                <section className="col-span-3 md:col-span-2">
                    <props.main />
                </section>

                {sidebarPosition === "right" && (
                    <section className="col-span-3 md:col-span-1">
                        <props.side />
                    </section>
                )}
            </div>
        </div>
    );
};
