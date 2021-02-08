import React from "react";
import { Anchor } from "../../components/anchor";

import Layout from "../../components/layout";
import { TitleHeader } from "../../components/title-header";

const CookiesPage: React.FC = () => {
    return (
        <Layout
            title="Privacy"
            description="There is no analytics or tracking of any kind on this
            website."
        >
            <TitleHeader>
                <h1 className="m-0">Your Privacy is Respected and Protected</h1>
                <p className="mb-0">
                    There is no analytics or tracking of any kind on this
                    website.
                </p>
            </TitleHeader>
            <div className="container page">
                <section>
                    <p>
                        Privacy online is a big topic these days, and I am in
                        the mindset that everyone has a right to browse the web
                        without being followed and having their habits and
                        preferences analysed where it's not necessary.
                    </p>
                    <p className="mb-0">
                        I've opted{" "}
                        <strong className="text-purple-500">not</strong> to add
                        any form of analytics to this site, which means You can
                        browse freely and anonymously with no tracking cookies
                        following you around. In fact, there are{" "}
                        <Anchor href="/cookies">no cookies of any kind</Anchor>{" "}
                        on this website at all!.
                    </p>
                </section>
            </div>
        </Layout>
    );
};

export default CookiesPage;
