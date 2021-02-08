import React from "react";
import { Anchor } from "../../components/anchor";

import Layout from "../../components/layout";
import { TitleHeader } from "../../components/title-header";

const CookiesPage: React.FC = () => {
    return (
        <Layout
            title="Cookies"
            description="You won't find a single cookie on this website."
        >
            <TitleHeader>
                <h1 className="m-0">No Cookies Here!</h1>
                <p className="mb-0">
                    You won't find a single cookie on this website.
                </p>
            </TitleHeader>
            <div className="container page">
                <section>
                    <p>
                        There is no analytics on this site, so there are{" "}
                        <strong className="text-purple-500">
                            no tracking cookies
                        </strong>{" "}
                        of any kind.
                    </p>
                    <p>
                        Also, this site does not have any functionality which
                        requires or relies on cookies, and I intend for it to
                        stay that way!
                    </p>
                    <p className="mb-0">
                        This means you can rest assured that your{" "}
                        <Anchor href="/privacy">privacy is protected</Anchor>{" "}
                        (and you'll never have to deal with one of those nasty
                        cookie popups on this site).
                    </p>
                </section>
            </div>
        </Layout>
    );
};

export default CookiesPage;
