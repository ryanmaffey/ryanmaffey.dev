import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface IState {
    isNavOpen: boolean;
}

const NAV_ITEMS = [
    {
        text: "About",
        url: "/about",
    },
    {
        text: "Posts",
        url: "/posts",
    },
    {
        text: "Tags",
        url: "/tags",
    },
    {
        text: "Resources",
        url: "/resources",
    },
    {
        text: "Privacy",
        url: "/privacy",
    },
];

export const Nav: React.FunctionComponent = () => {
    const [state, setState] = React.useState<IState>({ isNavOpen: false });
    const router = useRouter();

    return (
        <header>
            <a href="#content" className="skip-to-content-link">
                Skip to content
            </a>

            <nav className="c-nav flex items-center justify-between flex-wrap pt-8 pb-4 md:pt-8 md:pb-0">
                <div className="container flex sm:content-between">
                    <div className="flex items-center flex-grow sm:flex-grow md:justify-between mr-8">
                        <Link href="/">
                            <a className="text-2xl">
                                <strong className="text-primary">
                                    ryanmaffey.dev
                                </strong>
                            </a>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            type="button"
                            role="button"
                            aria-label={
                                (state.isNavOpen ? "Close" : "Open") +
                                " the navigation"
                            }
                            aria-pressed={state.isNavOpen}
                            aria-expanded={state.isNavOpen}
                            aria-haspopup="menu"
                            aria-controls="nav-menu"
                            className="c-nav__button flex items-center pl-4 pr-1 py-2 mt-1 text-primary"
                            onClick={() =>
                                setState({
                                    isNavOpen: !state.isNavOpen,
                                })
                            }
                        >
                            <svg
                                className="fill-current h-4 w-4"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden items-center md:flex">
                        <div className="md:flex-grow">
                            {NAV_ITEMS.map((item) => (
                                <Link href={item.url} key={item.url}>
                                    <a
                                        className={`block md:inline-block mx-2 px-4 hover:text-primary focus:text-primary ${
                                            router.pathname === item.url
                                                ? "text-primary"
                                                : ""
                                        }`}
                                    >
                                        {item.text}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    id="nav-menu"
                    className={`container flex md:hidden ${
                        state.isNavOpen ? "pt-4" : ""
                    }`}
                    style={{
                        maxHeight: state.isNavOpen ? "300px" : "0",
                        transition: "all 0.2s ease-in-out",
                        overflow: "hidden",
                    }}
                >
                    <Mobile />
                </div>
                <noscript>
                    <div className="container flex md:hidden">
                        <Mobile />
                    </div>
                    <style>
                        {`
                            .c-nav__button { 
                                display: none;
                            }
                        `}
                    </style>
                </noscript>
            </nav>
        </header>
    );
};

const Mobile: React.FC = () => {
    const router = useRouter();

    return (
        <div className="w-full">
            {NAV_ITEMS.map((item) => (
                <Link href={item.url} key={item.url}>
                    <a
                        className={`block mt-2 py-2 hover:text-primary focus:text-primary ${
                            router.pathname === item.url ? "text-primary" : ""
                        }`}
                    >
                        {item.text}
                    </a>
                </Link>
            ))}
        </div>
    );
};
