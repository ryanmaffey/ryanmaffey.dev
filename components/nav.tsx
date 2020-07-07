import React from "react";
import { useRouter } from "next/router";

import { Anchor } from "./anchor";

interface IState {
    isNavOpen: boolean;
}

export const Nav: React.FunctionComponent = () => {
    const [state, setState] = React.useState<IState>({ isNavOpen: false });
    const router = useRouter();

    return (
        <header>
            <a href="#content" className="skip-to-content-link">
                Skip to content
            </a>

            <nav className="flex items-center justify-between flex-wrap bg-gray-800 py-3 mb-5">
                <div className="container flex sm:content-between">
                    <div className="flex items-center flex-grow sm:flex-grow md:flex-grow-0 md:justify-between text-white mr-6">
                        <Anchor href="/" className="flex">
                            <img
                                src="/img/ryanmaffey.webp"
                                alt=""
                                className="rounded-full mr-3 border-2 border-teal-400"
                                width="30"
                                height="30"
                            />
                            <span className="text-xl tracking-tight">
                                ryanmaffey.dev
                            </span>
                        </Anchor>
                    </div>
                    <div className="md:hidden">
                        <button
                            role="button"
                            aria-label={
                                (state.isNavOpen ? "Close" : "Open") +
                                " the navigation"
                            }
                            className="flex items-center px-3 py-2 text-white"
                            onClick={() =>
                                setState({
                                    ...state,
                                    isNavOpen: !state.isNavOpen,
                                })
                            }
                        >
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-grow hidden items-center md:flex">
                        <div className="text-sm md:flex-grow">
                            {/* <Anchor
                                href="/about"
                                className={`block md:inline-block text-white mx-2 px-3 py-2 rounded outline-none hover:bg-gray-900 focus:bg-gray-900 ${
                                    router.pathname === "/about"
                                        ? "bg-gray-900"
                                        : ""
                                }`}
                            >
                                About Me
                            </Anchor> */}
                            <Anchor
                                href="/posts"
                                className={`block md:inline-block text-white mx-2 px-3 py-2 rounded outline-none hover:bg-gray-900 focus:bg-gray-900 ${
                                    router.pathname === "/posts"
                                        ? "bg-gray-900"
                                        : ""
                                }`}
                            >
                                Posts
                            </Anchor>
                        </div>
                    </div>
                </div>
                {state.isNavOpen && (
                    <div className="container flex mt-5 md:hidden">
                        <div className="text-sm w-full">
                            {/* <Anchor
                                href="/about"
                                className="block mt-2 text-white px-3 py-2 rounded outline-none hover:bg-gray-900 focus:bg-gray-900"
                            >
                                About Me
                            </Anchor> */}
                            <Anchor
                                href="/posts"
                                className="block mt-2 text-white px-3 py-2 rounded outline-none hover:bg-gray-900 focus:bg-gray-900"
                            >
                                Posts
                            </Anchor>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};
