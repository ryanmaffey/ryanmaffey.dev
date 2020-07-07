import React from "react";

import { Anchor } from "./anchor";

export class Footer extends React.PureComponent {
    render() {
        return (
            <footer className="bg-gray-800 text-white py-5 mt-6">
                <div className="container text-center">
                    <section>
                        <ul>
                            <li className="mb-5">
                                <Anchor
                                    href="https://twitter.com/ryanmaffey?lang=en"
                                    isExternalLink
                                >
                                    Get in touch on Twitter (@ryanmaffey)
                                </Anchor>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <p>&copy; Ryan Maffey, 2020</p>
                    </section>
                </div>
            </footer>
        );
    }
}
