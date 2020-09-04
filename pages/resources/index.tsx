import React from "react";

import Layout from "../../components/layout";
import { Anchor } from "../../components/anchor";
import { TitleHeader } from "../../components/title-header";

const ResourcesPage: React.StatelessComponent = () => {
    return (
        <Layout
            title="Resources"
            description="A collections of stuff which I find useful on a regular
        basis."
        >
            <TitleHeader>
                <h1 className="m-0">Resources</h1>
                <p className="text-gray-500 mb-0">
                    A collections of stuff which I find useful on a regular
                    basis.
                </p>
            </TitleHeader>
            <div className="container page grid gap-8 grid-cols-1 md:grid-cols-2 mb-4">
                <section>
                    <h2>Design Systems</h2>
                    <table className="c-table mb-4">
                        <tbody>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://www.carbondesignsystem.com/"
                                        isExternalLink
                                    >
                                        Carbon
                                    </Anchor>
                                </td>
                                <td>by IBM</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://material.io/"
                                        isExternalLink
                                    >
                                        Material Design
                                    </Anchor>
                                </td>
                                <td>by Google</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://design-system.service.gov.uk/"
                                        isExternalLink
                                    >
                                        GOV.UK
                                    </Anchor>
                                </td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://ux.mailchimp.com/"
                                        isExternalLink
                                    >
                                        Mailchimp
                                    </Anchor>
                                </td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://design.herokai.com/"
                                        isExternalLink
                                    >
                                        Herokai
                                    </Anchor>
                                </td>
                                <td>by Heroku</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://developer.microsoft.com/en-us/fluentui#/"
                                        isExternalLink
                                    >
                                        Fluent UI
                                    </Anchor>
                                </td>
                                <td>by Microsoft</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://protocol.mozilla.org/"
                                        isExternalLink
                                    >
                                        Protocol
                                    </Anchor>
                                </td>
                                <td>by Mozilla</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://vercel.com/design"
                                        isExternalLink
                                    >
                                        Vercel
                                    </Anchor>
                                </td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <h2>Docs</h2>
                    <table className="c-table mb-4">
                        <tbody>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://cssreference.io/"
                                        isExternalLink
                                    >
                                        CSS Reference
                                    </Anchor>
                                </td>
                                <td>A visual guide to CSS.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://devdocs.io/"
                                        isExternalLink
                                    >
                                        Dev Docs
                                    </Anchor>
                                </td>
                                <td>Combines multiple API documentations.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://danielkummer.github.io/git-flow-cheatsheet/"
                                        isExternalLink
                                    >
                                        Git-Flow Cheatsheet
                                    </Anchor>
                                </td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://developer.mozilla.org/en-US/docs/Web"
                                        isExternalLink
                                    >
                                        MDN
                                    </Anchor>
                                </td>
                                <td>
                                    Documentation for web technologies by
                                    Mozilla.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://tomcam.github.io/postgres/"
                                        isExternalLink
                                    >
                                        PostgreSQL Cheatsheet
                                    </Anchor>
                                </td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://udacity.github.io/git-styleguide/"
                                        isExternalLink
                                    >
                                        Git Commit Message Style Guide
                                    </Anchor>
                                </td>
                                <td>Nice, consistent commit message style.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <h2>Icons</h2>
                    <table className="c-table mb-4">
                        <tbody>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://realfavicongenerator.net/"
                                        isExternalLink
                                    >
                                        Real Favicon Generator
                                    </Anchor>
                                </td>
                                <td>
                                    Amazing tool to generate favicons, app icons
                                    &amp; themes.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://systemuicons.com/"
                                        isExternalLink
                                    >
                                        System UI Icons
                                    </Anchor>
                                </td>
                                <td>Nice SVG icon set.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="http://www.zondicons.com/"
                                        isExternalLink
                                    >
                                        Zondicons
                                    </Anchor>
                                </td>
                                <td>Nice SVG icon set.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://icons.getbootstrap.com/"
                                        isExternalLink
                                    >
                                        Bootstrap Icons
                                    </Anchor>
                                </td>
                                <td>
                                    Nice SVG icon set designed for Bootstrap.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://unicode.org/emoji/charts/full-emoji-list.html"
                                        isExternalLink
                                    >
                                        HTML Emoji
                                    </Anchor>
                                </td>
                                <td>All the HTML Emoji 😄.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <h2>News</h2>
                    <table className="c-table mb-4">
                        <tbody>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://www.theverge.com/"
                                        isExternalLink
                                    >
                                        The Verge
                                    </Anchor>
                                </td>
                                <td>
                                    Covers the intersection of technology,
                                    science, art, and culture.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://css-tricks.com/"
                                        isExternalLink
                                    >
                                        CSS-Tricks
                                    </Anchor>
                                </td>
                                <td>
                                    Front-end developer news and articles from
                                    some of the industry experts.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://dev.to/"
                                        isExternalLink
                                    >
                                        DEV
                                    </Anchor>
                                </td>
                                <td>
                                    Community of developers writing articles to
                                    share news and knowledge.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://thenextweb.com/"
                                        isExternalLink
                                    >
                                        The Next Web
                                    </Anchor>
                                </td>
                                <td>
                                    News about Internet technology, business and
                                    culture.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://www.smashingmagazine.com/"
                                        isExternalLink
                                    >
                                        Smashing Magazine
                                    </Anchor>
                                </td>
                                <td>
                                    News and articles for web designers and
                                    developers.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <h2>Tools</h2>
                    <table className="c-table mb-4">
                        <tbody>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://excalidraw.com/"
                                        isExternalLink
                                    >
                                        Excalidraw
                                    </Anchor>
                                </td>
                                <td>Awesome sketch-like drawing tool.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="http://asciiflow.com/"
                                        isExternalLink
                                    >
                                        ASCII Flow
                                    </Anchor>
                                </td>
                                <td>Draw ASCII images.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="http://keycode.info/"
                                        isExternalLink
                                    >
                                        Keycode Event Info
                                    </Anchor>
                                </td>
                                <td>Get details of keycode events.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://squoosh.app/"
                                        isExternalLink
                                    >
                                        Squoosh App
                                    </Anchor>
                                </td>
                                <td>Amazing image compression tool.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://www.titlecase.com/"
                                        isExternalLink
                                    >
                                        Title Case
                                    </Anchor>
                                </td>
                                <td>
                                    Make sure title text is cased correctly.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://grammarchecker.net/character-count/"
                                        isExternalLink
                                    >
                                        Character Counter
                                    </Anchor>
                                </td>
                                <td>
                                    Count number of words &amp; characters in a
                                    block of text.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://www.metric-conversions.org/time/minutes-to-seconds.htm"
                                        isExternalLink
                                    >
                                        Minutes to Seconds
                                    </Anchor>
                                </td>
                                <td>Because I suck at Math.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://search.google.com/test/rich-results"
                                        isExternalLink
                                    >
                                        Rich Text Results
                                    </Anchor>
                                </td>
                                <td>
                                    Useful tool for testing &amp; validating
                                    your structured data.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://bundlephobia.com/"
                                        isExternalLink
                                    >
                                        BundlePhobia
                                    </Anchor>
                                </td>
                                <td>Detailed info about npm package sizes.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://frontendchecklist.io/"
                                        isExternalLink
                                    >
                                        Front End Checklist
                                    </Anchor>
                                </td>
                                <td>
                                    Useful checklist for greenfield projects.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://www.seoptimer.com/"
                                        isExternalLink
                                    >
                                        SEO Optimiser
                                    </Anchor>
                                </td>
                                <td>Great tool for assessing SEO on sites.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <h2>VS Code Extensions</h2>
                    <table className="c-table mb-4">
                        <tbody>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight"
                                        isExternalLink
                                    >
                                        TODO Highlight
                                    </Anchor>
                                </td>
                                <td>
                                    Highlight TODOs, FIXMEs, and any other
                                    keywords.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-todo-plus"
                                        isExternalLink
                                    >
                                        Todo+
                                    </Anchor>
                                </td>
                                <td>Lists Todo's in a sidebar.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense"
                                        isExternalLink
                                    >
                                        npm Intellisense
                                    </Anchor>
                                </td>
                                <td>
                                    Autocompletes npm modules in import
                                    statements
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"
                                        isExternalLink
                                    >
                                        Path Intellisense
                                    </Anchor>
                                </td>
                                <td>Autocompletes filenames.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script"
                                        isExternalLink
                                    >
                                        npm
                                    </Anchor>
                                </td>
                                <td>
                                    Run npm scripts and validate installed
                                    modules against the dependencies defined in
                                    the package.json.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                                        isExternalLink
                                    >
                                        Prettier
                                    </Anchor>
                                </td>
                                <td>Opinionated code formatter</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
                                        isExternalLink
                                    >
                                        ESLint
                                    </Anchor>
                                </td>
                                <td>
                                    Find and fix problems in your JavaScript
                                    code.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=henry-li.vscode-import-formatter"
                                        isExternalLink
                                    >
                                        ES6 Import Formatter
                                    </Anchor>
                                </td>
                                <td>
                                    Sort the leading imports/requires for ES6.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint"
                                        isExternalLink
                                    >
                                        webhint
                                    </Anchor>
                                </td>
                                <td>
                                    Linting tool that helps you improve your
                                    site's accessibility, speed, cross-browser
                                    compatibility, and more.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph"
                                        isExternalLink
                                    >
                                        Git Graph
                                    </Anchor>
                                </td>
                                <td>
                                    View a Git Graph of your repository, and
                                    perform Git actions from the graph.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
                                        isExternalLink
                                    >
                                        GitLens
                                    </Anchor>
                                </td>
                                <td>Supercharged the Git capabilities.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=snyk-security.vscode-vuln-cost"
                                        isExternalLink
                                    >
                                        Vuln Cost
                                    </Anchor>
                                </td>
                                <td>
                                    Security Scanner to find and fix
                                    vulnerabilities in JavaScript and
                                    TypeScript.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
                                        isExternalLink
                                    >
                                        Code Spell Checker
                                    </Anchor>
                                </td>
                                <td>Spelling checker for source code.</td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock"
                                        isExternalLink
                                    >
                                        Peacock
                                    </Anchor>
                                </td>
                                <td>
                                    Subtly change the workspace color of your
                                    workspace.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Anchor
                                        href="https://marketplace.visualstudio.com/items?itemName=johnpapa.read-time"
                                        isExternalLink
                                    >
                                        Read Time
                                    </Anchor>
                                </td>
                                <td>
                                    Estimate how long it may take to read your
                                    markdown.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </Layout>
    );
};

export default ResourcesPage;
