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

            <nav className="flex items-center justify-between flex-wrap py-10">
                <div className="container flex sm:content-between">
                    <div className="flex items-center flex-grow sm:flex-grow md:flex-grow-0 md:justify-between mr-6">
                        <Anchor
                            href="/"
                            className="text-2xl text-orange-500 font-bold"
                        >
                            ryanmaffey.dev
                        </Anchor>
                    </div>
                    <div className="md:hidden">
                        <button
                            role="button"
                            aria-label={
                                (state.isNavOpen ? "Close" : "Open") +
                                " the navigation"
                            }
                            className="flex items-center px-3 py-2"
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
                        <div className="md:flex-grow">
                            <Anchor
                                href="/about"
                                className={`block md:inline-block mx-2 px-3 py-2 hover:text-orange-500 focus:text-orange-500 border-b-2 border-gray-900 hover:border-orange-500 focus:border-orange-500 ${
                                    router.pathname === "/about"
                                        ? "border-blue-500"
                                        : ""
                                }`}
                            >
                                About Me
                            </Anchor>
                            <Anchor
                                href="/posts"
                                className={`block md:inline-block mx-2 px-3 py-2 hover:text-orange-500 focus:text-orange-500 border-b-2 border-gray-900  hover:border-orange-500 focus:border-orange-500 ${
                                    router.pathname === "/posts"
                                        ? "border-blue-500"
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
                        <div className="w-full">
                            <Anchor
                                href="/about"
                                className="block mt-2 px-3 py-2 hover:text-orange-500 focus:text-orange-500"
                            >
                                About Me
                            </Anchor>
                            <Anchor
                                href="/posts"
                                className="block mt-2 px-3 py-2 hover:text-orange-500 focus:text-orange-500"
                            >
                                Posts
                            </Anchor>
                        </div>
                    </div>
                )}
            </nav>
            <hr className="border-orange-500" />
        </header>
    );
};
