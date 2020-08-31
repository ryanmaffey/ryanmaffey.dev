import React from "react";

import Layout from "../../components/layout";
import { TitleHeader } from "../../components/title-header";

const CookiesPage: React.StatelessComponent = () => {
    return (
        <Layout
            title="Resources"
            description="A collections of stuff which I find useful on a regular
        basis."
        >
            <TitleHeader>
                <h1 className="m-0">No Cookies Here!</h1>
                <p className="text-gray-500 mb-0">
                    Enjoy use of this site without any analytics or tracking.
                </p>
            </TitleHeader>
            <div className="container page">
                <section>
                    <p>
                        It's important to me that people enjoy using this
                        website without having to think/worry about their
                        privacy, which is why I decided not to include any
                        analytics or tracking of any kind on this site. The only
                        way I get any feedback about visitors is if someone
                        tells me about it or if someone likes one of my blog
                        posts (so if you like one, hit the button!).
                    </p>
                </section>
            </div>
        </Layout>
    );
};

export default CookiesPage;
