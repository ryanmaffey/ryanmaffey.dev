import React from "react";
import Head from "next/head";

import Layout, { siteTitle } from "../../components/layout";
import { getLatestPostsData } from "../../lib/posts";
import { IPost } from "../../types";
import { Anchor } from "../../components/anchor";

interface IProps {
    latestPosts: IPost[];
}

const PostsPage: React.StatelessComponent<IProps> = (props) => {
    return (
        <Layout>
            <Head>
                <title>About Me | {siteTitle}</title>
            </Head>
            <div className="container">
                <div className="bg-gray-800 mb-5 p-5 rounded">
                    <h1 className="m-0">About Me</h1>
                </div>
                <div className="bg-gray-800 mb-5 p-5 rounded">
                    <h2>How Did I Get into Web Development?</h2>
                    <p>
                        In secondary school it was part of the syllabus to make
                        some simple websites in IT class, that was the first
                        time I'd been exposed to any kind of coding. Looking
                        back, I had no idea what I was doing, but I loved it
                        nonetheless!
                    </p>
                    <p>
                        A friend of mine taught me some Visual Basic (VB) and we
                        ended up building an RGB/Hex colour picker for fun. We
                        also built on a website for one of the staff members at
                        the school. The more I practiced the more it made me
                        think it's something that I could happily do for a
                        living.
                    </p>
                    <h2>University</h2>
                    <p>
                        When it got to the point of applying for University I
                        didn't know what I wanted, but I knew what I enjoyed,
                        and that was the next best thing! I applied for anything
                        web development related and eventually I was thrilled to
                        get accepted into{" "}
                        <Anchor href="https://www.lboro.ac.uk/" isExternalLink>
                            Loughborough University
                        </Anchor>
                        's Web Development and Design course.
                    </p>
                    <h3>Placement Year</h3>
                    <p>
                        I accepted a placement year at{" "}
                        <Anchor href="https://www.redweb.com/" isExternalLink>
                            Redweb
                        </Anchor>{" "}
                        where I got the opportunity to split my time between
                        working as a back-end and front-end developer.
                    </p>
                    <h4>Part 1: Back-End Developer Experience</h4>
                    <p>
                        I made a social media management extension for{" "}
                        <Anchor href="https://umbraco.com/" isExternalLink>
                            Umbraco
                        </Anchor>{" "}
                        (a content management system). It gave me a good chance
                        to get my bearings writing C# .NET WebForms applications
                        and enabled me to learn all about{" "}
                        <Anchor href="https://oauth.net/" isExternalLink>
                            OAuth
                        </Anchor>{" "}
                        and get to grips with Facebook and Twitter's APIs. The
                        extension let you sign in to multiple Facebook/Twitter
                        accounts and post to any number of them simultaneously.
                        It was a bit rough around the edges but it met the
                        specification!
                    </p>
                    <h4>Part 2: Front-End Developer Experience</h4>
                    <p>
                        I was given all sorts of fun jobs as a front-end
                        developer. The one I enjoyed the most was creating a
                        JavaScript library to create one or more geo-fences and
                        tell you whether you were inside or outside of any
                        geo-fenced areas using the browser's{" "}
                        <Anchor
                            href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
                            isExternalLink
                        >
                            Geolocation API
                        </Anchor>
                        . It was really good fun to build and worked pretty
                        well!
                    </p>
                    <h4>The Job Offer</h4>
                    <p>
                        I was very pleased to get a job offer from Redweb; I got
                        the choice of job role and decided to come back as a
                        Front-End Developer after graduation. I really loved my
                        time there and couldn't wait to finish university so I
                        could get back to work!
                    </p>
                    <h3>Final Year Project</h3>
                    <p>
                        My project was inspired by an issue that the Redweb
                        front-end developers faced all the time; test devices
                        kept going missing! The solution: create a system to
                        allow people to check the devices in and out.
                    </p>
                    <p>
                        I used{" "}
                        <Anchor href="https://angularjs.org/" isExternalLink>
                            Angular v1
                        </Anchor>{" "}
                        to power the web application and{" "}
                        <Anchor href="https://socket.io/" isExternalLink>
                            Socket.io
                        </Anchor>{" "}
                        to keep everything in sync in real-time. I was inspired
                        by some people at Redweb to incorporate a hardware
                        element to my project. I'd seen some of the things that
                        they'd managed to build using an{" "}
                        <Anchor href="https://www.arduino.cc/" isExternalLink>
                            Arduino
                        </Anchor>{" "}
                        and it was awesome. I knew if I could include something
                        like that into my project it could really help set it
                        apart from the rest.
                    </p>
                    <p>
                        The idea was that each device sits on its own dedicated
                        stand, onto which I could attach a photoresistor (light
                        sensor). I know whether a device is on it''s stand or
                        not by how much light is reaching the sensor (light =
                        device checked-out, dark = device checked-in). When
                        someone picks up a device and swipes their staff card on
                        the RFID reader it registers the individual as
                        checking-out the device. Equally, when the the device is
                        returned, the system would register the device as
                        checked-in. Whenever the state of any of the devices
                        changed, the web application would be instantly updated.
                        Pretty neat!
                    </p>
                    <p>
                        It was a lot of hard work building an application like
                        that using tech I was really unfamiliar with.
                        Nevertheless, I managed to get working a proof of
                        concept to show to my lecturers on presentation day.
                        Fortunately the demo went really smoothly and the
                        lecturers absolutely loved it.
                    </p>
                    <h3>Graduation</h3>
                    <p>
                        After all my hard work I proudly achieved my First Class
                        Honours Degree. Even today I am still incredibly pleased
                        with what I managed to accomplish.
                    </p>
                    <h2>Work</h2>
                    <h3>Redweb (2015 - 2017)</h3>
                    <p className="font-bold">Front-End Developer</p>
                    <p>
                        And so I was back! I was mostly responsible for creating
                        the visual components, forms, search pages, etc. for
                        large sites built on top of{" "}
                        <Anchor href="https://www.sitecore.com/" isExternalLink>
                            Sitecore
                        </Anchor>{" "}
                        (another content management system).
                    </p>
                    <p>
                        During my time here I was able to really progress my CSS
                        &amp; JS skills. I learned about{" "}
                        <Anchor href="https://gulpjs.com/" isExternalLink>
                            Gulp
                        </Anchor>{" "}
                        and{" "}
                        <Anchor href="https://sass-lang.com/" isExternalLink>
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
                        couple of years I felt as though it was time to move on.
                        I knew I had more to offer but there wasn't the scope
                        for me to grow like I wanted to. I have very fond
                        memories of my time there and I learned a lot from the
                        job and the people.
                    </p>
                    <h3>Amigo Loans (2017 - Present)</h3>
                    <p className="font-bold">Front-End Software Engineer</p>
                    <p>
                        I have massively grown as a developer as a result of
                        working at Amigo. Despite my job title I have
                        essentially become a full-stack developer. I've learned
                        a lot about building .NET /{" "}
                        <Anchor
                            href="https://docs.microsoft.com/en-gb/dotnet/core/"
                            isExternalLink
                        >
                            .NET Core
                        </Anchor>{" "}
                        MVC applications and services, and building front-ends
                        using{" "}
                        <Anchor href="https://reactjs.org/" isExternalLink>
                            React
                        </Anchor>
                        ,{" "}
                        <Anchor href="https://redux.js.org/" isExternalLink>
                            Redux
                        </Anchor>
                        ,{" "}
                        <Anchor href="https://webpack.js.org/" isExternalLink>
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
                        transformed my ability and confidence as a developer.
                    </p>
                    <p>
                        I also look after all of the Engineering placement
                        students when they first join the team. I help them get
                        set up, settled in and generally be there whenever they
                        have any questions, technical or otherwise.
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
                </div>
            </div>
        </Layout>
    );
};

export const getStaticProps = async (): Promise<{ props: IProps }> => {
    const latestPosts = await getLatestPostsData();
    return {
        props: {
            latestPosts,
        },
    };
};

export default PostsPage;
