import React from "react";

export const SidebarLayout: React.StatelessComponent<{
    side: React.StatelessComponent;
    main: React.StatelessComponent;
}> = (props) => {
    return (
        <div className="container">
            <div
                className="grid grid-rows-1 grid-cols-4 gap-4"
                style={{
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gridTemplateRows: "auto",
                }}
            >
                <section className="col-span-4 md:col-span-1">
                    <props.side />
                </section>

                <section className="col-span-4 md:col-span-3">
                    <props.main />
                </section>
            </div>
        </div>
    );
};
