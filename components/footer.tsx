import React from "react";
import { Anchor } from "./anchor";
import { TWITTER } from "../constants/urls";

export class Footer extends React.PureComponent {
    render() {
        return (
            <footer className="bg-gray-900 py-8 mt-8">
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
                                <Anchor href="/cookies">Cookie Info</Anchor>
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
