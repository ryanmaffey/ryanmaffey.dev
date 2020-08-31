import React from "react";

import Layout from "../../components/layout";
import { Anchor } from "../../components/anchor";
import { TitleHeader } from "../../components/title-header";

const ResourcesPage: React.StatelessComponent = () => {
    return (
        <Layout title="Resources" description="TODO">
            <TitleHeader>
                <h1 className="m-0">Resources</h1>
                <p className="text-gray-500">
                    A collections of stuff which I find useful on a regular
                    basis.
                </p>
            </TitleHeader>
            <div className="container page grid gap-8 grid-cols-1 md:grid-cols-3 mb-4">
                <section>
                    <h2>Design Systems</h2>
                    <ul>
                        <li>
                            <Anchor
                                href="https://www.carbondesignsystem.com/"
                                isExternalLink
                            >
                                Carbon
                            </Anchor>
                        </li>
                        <li>
                            <Anchor href="https://material.io/" isExternalLink>
                                Material Design - Google
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://design-system.service.gov.uk/"
                                isExternalLink
                            >
                                GOV.UK
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://ux.mailchimp.com/"
                                isExternalLink
                            >
                                Mailchimp
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://design.herokai.com/"
                                isExternalLink
                            >
                                Herokai - Heroku
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://developer.microsoft.com/en-us/fluentui#/"
                                isExternalLink
                            >
                                Microsoft Fluent UI
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://protocol.mozilla.org/"
                                isExternalLink
                            >
                                Protocol - Mozilla
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://vercel.com/design"
                                isExternalLink
                            >
                                Vercel
                            </Anchor>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Docs</h2>
                    <ul>
                        <li>
                            <Anchor
                                href="https://cssreference.io/"
                                isExternalLink
                            >
                                CSS Reference
                            </Anchor>
                        </li>
                        <li>
                            <Anchor href="https://devdocs.io/" isExternalLink>
                                Dev Docs
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://danielkummer.github.io/git-flow-cheatsheet/"
                                isExternalLink
                            >
                                Git-Flow Cheatsheet
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://developer.mozilla.org/en-US/docs/Web"
                                isExternalLink
                            >
                                MDN
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://tomcam.github.io/postgres/"
                                isExternalLink
                            >
                                PostgreSQL Cheatsheet
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://udacity.github.io/git-styleguide/"
                                isExternalLink
                            >
                                Git Commit Message Style Guide
                            </Anchor>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Icons</h2>
                    <ul>
                        <li>
                            <Anchor
                                href="https://realfavicongenerator.net/"
                                isExternalLink
                            >
                                Real Favicon Generator
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://systemuicons.com/"
                                isExternalLink
                            >
                                System UI Icons
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="http://www.zondicons.com/"
                                isExternalLink
                            >
                                Zondicons
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://icons.getbootstrap.com/"
                                isExternalLink
                            >
                                Bootstrap Icons
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://unicode.org/emoji/charts/full-emoji-list.html"
                                isExternalLink
                            >
                                HTML Emoji
                            </Anchor>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>News</h2>
                    <ul>
                        <li>
                            <Anchor
                                href="https://www.theverge.com/"
                                isExternalLink
                            >
                                The Verge
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://css-tricks.com/"
                                isExternalLink
                            >
                                CSS-Tricks
                            </Anchor>
                        </li>
                        <li>
                            <Anchor href="https://dev.to/" isExternalLink>
                                DEV
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://thenextweb.com/"
                                isExternalLink
                            >
                                The Next Web
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://www.smashingmagazine.com/"
                                isExternalLink
                            >
                                Smashing Magazine
                            </Anchor>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Tools</h2>
                    <ul>
                        <li>
                            <Anchor
                                href="https://excalidraw.com/"
                                isExternalLink
                            >
                                Excalidraw
                            </Anchor>
                        </li>
                        <li>
                            <Anchor href="http://keycode.info/" isExternalLink>
                                Keycode Event Info
                            </Anchor>
                        </li>
                        <li>
                            <Anchor href="https://squoosh.app/" isExternalLink>
                                Squoosh App
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://www.titlecase.com/"
                                isExternalLink
                            >
                                Title Case
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://grammarchecker.net/character-count/"
                                isExternalLink
                            >
                                Character Counter
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://www.metric-conversions.org/time/minutes-to-seconds.htm"
                                isExternalLink
                            >
                                Minutes to Seconds
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://search.google.com/structured-data/testing-tool/u/0/"
                                isExternalLink
                            >
                                Structured Data Testing Tool
                            </Anchor>
                        </li>
                        <li>
                            <Anchor
                                href="https://search.google.com/test/rich-results"
                                isExternalLink
                            >
                                Rich Text Results
                            </Anchor>
                        </li>
                    </ul>
                </section>
            </div>
        </Layout>
    );
};

export default ResourcesPage;
