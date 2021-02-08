import React from "react";
import { Anchor } from "./anchor";
import { TWITTER } from "../constants/urls";

export class Footer extends React.PureComponent {
    render() {
        return (
            <footer className="gradient pb-8 mt-8">
                <div className="h-12 md:h-24 flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        className="w-full"
                    >
                        <path
                            fill="#12161d"
                            fillOpacity="1"
                            d="M0,192L60,181.3C120,171,240,149,360,138.7C480,128,600,128,720,138.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                        ></path>
                    </svg>
                </div>

                <div className="container text-center">
                    <section>
                        <ul>
                            <li className="mb-4">
                                <Anchor href={TWITTER} isExternalLink>
                                    Twitter (@ryanmaffey)
                                </Anchor>
                            </li>
                            <li className="mb-4">
                                <Anchor
                                    href="https://github.com/ryanmaffey"
                                    isExternalLink
                                >
                                    GitHub (ryanmaffey)
                                </Anchor>
                            </li>
                            <li className="mb-4">
                                <Anchor href="/cookies">Privacy</Anchor>
                            </li>
                            <li className="mb-4">
                                <Anchor href="/cookies">Cookies</Anchor>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <p className="mb-0">&copy; Ryan Maffey, 2021</p>
                    </section>
                </div>
            </footer>
        );
    }
}
