import React from "react";
import Link from "next/link";
import { Anchor } from "./anchor";

export class Footer extends React.PureComponent {
    render() {
        return (
            <footer className="bg-gray-900 py-8 mt-8">
                <div className="container text-center">
                    <section>
                        <ul>
                            <li className="mb-4">
                                <Anchor
                                    href="https://twitter.com/ryanmaffey?lang=en"
                                    isExternalLink
                                >
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
                        </ul>
                    </section>
                    <section>
                        <p className="mb-0">&copy; Ryan Maffey, 2020</p>
                    </section>
                </div>
            </footer>
        );
    }
}
