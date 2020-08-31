import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface IState {
    isNavOpen: boolean;
}

export const Nav: React.FunctionComponent = () => {
    const [state, setState] = React.useState<IState>({ isNavOpen: false });
    const router = useRouter();

    const navItems = [
        {
            text: "About",
            url: "/about",
        },
        {
            text: "Posts",
            url: "/posts",
        },
        {
            text: "Resources",
            url: "/resources",
        },
    ];

    return (
        <header>
            <a href="#content" className="skip-to-content-link">
                Skip to content
            </a>

            <nav className="flex items-center justify-between flex-wrap py-4 md:py-8">
                <div className="container flex sm:content-between">
                    <div className="flex items-center flex-grow sm:flex-grow md:flex-grow-0 md:justify-between mr-8">
                        <Link href="/">
                            <a className="text-2xl text-orange-400">
                                ryanmaffey.dev
                            </a>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            role="button"
                            aria-label={
                                (state.isNavOpen ? "Close" : "Open") +
                                " the navigation"
                            }
                            className="flex items-center px-4 py-2 mt-1"
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
                    <div className="flex-grow hidden items-center md:flex">
                        <div className="md:flex-grow">
                            {navItems.map((item) => (
                                <Link href={item.url} key={item.url}>
                                    <a
                                        className={`block md:inline-block mx-2 px-4 hover:text-orange-400 focus:text-orange-400 ${
                                            router.pathname === item.url
                                                ? "text-orange-400"
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
                {state.isNavOpen && (
                    <div className="container flex mt-4 md:hidden">
                        <div className="w-full">
                            {navItems.map((item) => (
                                <Link href={item.url}>
                                    <a
                                        className={`block mt-2 py-2 hover:text-orange-400 focus:text-orange-400 ${
                                            router.pathname === item.url
                                                ? "text-orange-400"
                                                : ""
                                        }`}
                                    >
                                        {item.text}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};
