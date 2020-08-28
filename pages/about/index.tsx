import React from "react";

import Layout from "../../components/layout";
import { IPost } from "../../types";
import { Anchor } from "../../components/anchor";

interface IProps {
    latestPosts: IPost[];
}

const AboutPage: React.StatelessComponent<IProps> = (props) => {
    return (
        <Layout
            title="About Me"
            description="I'm Ryan, a professional Front-End Web Developer working in Bournemouth, UK. Here you can find a bit more about me and what I can do."
        >
            <div className="py-8 md:py-20 mb-8 bg-gray-900 text-center">
                <h1 className="m-0">About Me</h1>
            </div>
            <div className="container page">
                {/* <picture className="hidden md:flex w-full md:ml-8">
                        <source
                            media="(max-width: 768px)"
                            srcSet="/img/ryanmaffey-md.webp"
                            type="image/webp"
                        />
                        <source
                            media="(max-width: 768px)"
                            srcSet="/img/ryanmaffey-md.jpg"
                            type="image/jpeg"
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet="/img/ryanmaffey-sm.webp"
                            type="image/webp"
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet="/img/ryanmaffey-sm.jpg"
                            type="image/jpeg"
                        />
                        <img
                            src="/img/ryanmaffey-lg.jpg"
                            alt=""
                            className="rounded-full w-auto m-auto"
                            width="448"
                            height="448"
                        />
                    </picture> */}

                <div className="mb-8">
                    {/* === SKILLS ====================================== */}

                    <section className="mt-16">
                        <h2>Skills &amp; Tech</h2>
                        <p>
                            Here's a collection of all of the tools and tech
                            that I've had experience with:
                        </p>
                        <ul className="c-tag-list">
                            <li className="c-tag">HTML (5)</li>
                            <li className="c-tag">CSS (3)</li>
                            <li className="c-tag">JS (ES2017)</li>
                            <li className="c-tag">TypeScript</li>
                            <li className="c-tag">jQuery</li>
                            <li className="c-tag">React</li>
                            <li className="c-tag">JSX</li>
                            <li className="c-tag">Redux</li>
                            <li className="c-tag">Gulp</li>
                            <li className="c-tag">Webpack</li>
                            <li className="c-tag">Babel</li>
                            <li className="c-tag">LESS</li>
                            <li className="c-tag">SASS</li>
                            <li className="c-tag">Tailwind</li>
                            <li className="c-tag">Next.js</li>
                            <li className="c-tag">C#</li>
                            <li className="c-tag">Razor</li>
                            <li className="c-tag">.NET</li>
                            <li className="c-tag">.NET Core</li>
                            <li className="c-tag">MVC</li>
                            <li className="c-tag">JSON</li>
                            <li className="c-tag">Swagger</li>
                            <li className="c-tag">WCF</li>
                            <li className="c-tag">WCF Test Client</li>
                            <li className="c-tag">Visual Studio</li>
                            <li className="c-tag">Visual Studio Code</li>
                            <li className="c-tag">T-SQL</li>
                            <li className="c-tag">Stored Procedures</li>
                            <li className="c-tag">Dapper</li>
                            <li className="c-tag">
                                SQL Server Management Studio
                            </li>
                            <li className="c-tag">Postman</li>
                            <li className="c-tag">CI</li>
                            <li className="c-tag">TeamCity</li>
                            <li className="c-tag">Octopus Deploy</li>
                            <li className="c-tag">TFS</li>
                            <li className="c-tag">Git</li>
                            <li className="c-tag">GitHub</li>
                            <li className="c-tag">VSTS</li>
                            <li className="c-tag">Markdown</li>
                            <li className="c-tag">Nunjucks</li>
                            <li className="c-tag">Node.js</li>
                            <li className="c-tag">npm</li>
                            <li className="c-tag">Express</li>
                            <li className="c-tag">Jest</li>
                            <li className="c-tag">Cypress.io</li>
                            <li className="c-tag">Nightwatch.js</li>
                            <li className="c-tag">
                                Object Orientated Programming
                            </li>
                        </ul>
                    </section>

                    {/* === EMPLOYMENT ====================================== */}

                    <section className="mt-16">
                        <h2>Employment</h2>

                        <h3 className="mb-0">Redweb (2013 - 2014)</h3>
                        <p className="text-gray-500">
                            Developer Placement Student
                        </p>

                        <p>
                            I accepted a placement year at{" "}
                            <Anchor
                                href="https://www.redweb.com/"
                                isExternalLink
                            >
                                Redweb
                            </Anchor>{" "}
                            where I got the opportunity to split my time 50/50
                            between working as a back-end and front-end
                            developer.
                        </p>
                        <p>
                            As a back-end developer for the first six months I
                            created a social media management extension for the{" "}
                            <Anchor href="https://umbraco.com/" isExternalLink>
                                Umbraco
                            </Anchor>{" "}
                            content management system.
                        </p>
                        <p>
                            As a front-end developer for the final six months I
                            was given a range of smaller projects, but the one I
                            enjoyed the most was creating a JavaScript library
                            to create one or more geo-fences and tell you
                            whether you were inside or outside of any geo-fenced
                            areas using the browser's{" "}
                            <Anchor
                                href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
                                isExternalLink
                            >
                                Geolocation API
                            </Anchor>
                            .
                        </p>

                        <h3 className="mb-0">Redweb (2015 - 2017)</h3>
                        <p className="text-gray-500">Front-End Developer</p>

                        <p>
                            And so I was back! I was mostly responsible for
                            creating the visual components, forms, search pages,
                            etc. for large sites built on top of{" "}
                            <Anchor
                                href="https://www.sitecore.com/"
                                isExternalLink
                            >
                                Sitecore
                            </Anchor>{" "}
                            (another content management system).
                        </p>
                        <p>
                            During my time here I was able to really progress my
                            CSS &amp; JS skills. I learned about{" "}
                            <Anchor href="https://gulpjs.com/" isExternalLink>
                                Gulp
                            </Anchor>{" "}
                            and{" "}
                            <Anchor
                                href="https://sass-lang.com/"
                                isExternalLink
                            >
                                Sass
                            </Anchor>
                            , I removed my reliance on{" "}
                            <Anchor href="https://jquery.com/" isExternalLink>
                                jQuery
                            </Anchor>{" "}
                            and continued to learn Angular v1.
                        </p>
                        <p>
                            Redweb was a brilliant start to my career, but after
                            couple of years I felt as though it was time to move
                            on. I knew I had more to offer but there wasn't the
                            scope for me to grow like I wanted to. I have very
                            fond memories of my time there and I learned a lot
                            from the job and the people.
                        </p>

                        <h3 className="mb-0">Amigo Loans (2017 - Present)</h3>
                        <p className="text-gray-500">
                            Front-End Software Engineer
                        </p>

                        <p>
                            I have massively grown as a developer as a result of
                            working at Amigo. Despite my job title I have
                            essentially become a full-stack developer. I've
                            learned a lot about building .NET /{" "}
                            <Anchor
                                href="https://docs.microsoft.com/en-gb/dotnet/core/"
                                isExternalLink
                            >
                                .NET Core
                            </Anchor>{" "}
                            MVC applications and services, and building
                            front-ends using{" "}
                            <Anchor href="https://reactjs.org/" isExternalLink>
                                React
                            </Anchor>
                            ,{" "}
                            <Anchor href="https://redux.js.org/" isExternalLink>
                                Redux
                            </Anchor>
                            ,{" "}
                            <Anchor
                                href="https://webpack.js.org/"
                                isExternalLink
                            >
                                Webpack
                            </Anchor>{" "}
                            ,{" "}
                            <Anchor
                                href="https://www.typescriptlang.org/"
                                isExternalLink
                            >
                                TypeScript
                            </Anchor>{" "}
                            and more. All of this knowledge has completely
                            transformed my ability and confidence as a
                            developer.
                        </p>
                        <p>
                            I also look after all of the Engineering placement
                            students when they first join the team. I help them
                            get set up, settled in and generally be there
                            whenever they have any questions, technical or
                            otherwise.
                        </p>
                        <p>
                            If you're interested in joining the team{" "}
                            <Anchor
                                href="https://www.amigoloans.co.uk/careers/Departments/Engineering"
                                isExternalLink
                            >
                                we're always hiring!
                            </Anchor>
                        </p>
                    </section>

                    {/* === EDUCATION ====================================== */}

                    <section className="mt-16">
                        <h2>Education</h2>

                        <p>
                            I'm very proud to have been awarded a First Class
                            Honours Degree in Web Development and Design{" "}
                            <Anchor
                                href="https://www.lboro.ac.uk/"
                                isExternalLink
                            >
                                Loughborough University
                            </Anchor>
                            . My stand-out achievement throughout my time at
                            University is definitely my Final Year Project,
                            which was inspired by my experiences during my
                            placement year.
                        </p>

                        <h3>Final Year Project</h3>

                        <p>
                            The Front-End Developers at Redweb faced the same
                            problem frequently; test devices kept going missing!
                            The solution: create a system to allow people to
                            check the devices in and out so that we can see who
                            has which device.
                        </p>
                        <p>
                            I used{" "}
                            <Anchor
                                href="https://angularjs.org/"
                                isExternalLink
                            >
                                Angular v1
                            </Anchor>{" "}
                            to power the web application and{" "}
                            <Anchor href="https://socket.io/" isExternalLink>
                                Socket.io
                            </Anchor>{" "}
                            to keep everything in sync in real-time. I was
                            inspired by some people at Redweb to incorporate a
                            hardware element to my project. I'd seen some of the
                            things that they'd managed to build using an{" "}
                            <Anchor
                                href="https://www.arduino.cc/"
                                isExternalLink
                            >
                                Arduino
                            </Anchor>{" "}
                            and it was awesome. I knew if I could include
                            something like that into my project it could really
                            help set it apart from the rest.
                        </p>
                        <p>
                            The idea was that each device sits on its own
                            dedicated stand, onto which I could attach a
                            photoresistor (light sensor). I know whether a
                            device is on it''s stand or not by how much light is
                            reaching the sensor (light = device checked-out,
                            dark = device checked-in). When someone picks up a
                            device and swipes their staff card on the RFID
                            reader it registers the individual as checking-out
                            the device. Equally, when the the device is
                            returned, the system would register the device as
                            checked-in. Whenever the state of any of the devices
                            changed, the web application would be instantly
                            updated. Pretty neat!
                        </p>
                        <p>
                            It was a lot of hard work building an application
                            like that using tech I was really unfamiliar with.
                            Nevertheless, I managed to get working a proof of
                            concept to show to my lecturers on presentation day.
                            Fortunately the demo went really smoothly and the
                            lecturers absolutely loved it.
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;
