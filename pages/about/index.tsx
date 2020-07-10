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
                        Honestly, kind of by chance/accident! Back in the late
                        2000's I was in secondary school making simple websites
                        in IT classes. My friend Sam knew how to build websites
                        already because he'd taught himself at home so he helped
                        me get to grips with the basics.
                    </p>
                    <p>
                        Sam also offered to teach me some Visual Basic (VB) and
                        we ended up building a little RGB/Hex colour picker. It
                        was nothing special but it was my first taste of using a
                        programming language that didn't involve DOM
                        manipulation in JavaScript. It was great fun and a good
                        learning experience.
                    </p>
                    <p>
                        We ended up really doing well in class and got an offer
                        to make a website for one of the staff members at the
                        school. I was intended to advertise the new AstroTurf
                        football pitch and help facilitate bookings etc. It was
                        our first experience of dealing with a real-life client
                        which was pretty cool! We worked on that site for hours
                        after school days and during lunchtimes. Sadly, after
                        all the effort we put into it, the site never went live.
                        Nevertheless, it helped me develop my knowledge even
                        more and made me think it's something that I could
                        happily do for a living. Up until that point I'd wanted
                        to go into teaching Chemistry (it's funny how things
                        change!).
                    </p>
                    <h2>University</h2>
                    <p>
                        When it got to the point of applying for University I
                        didn't know what I wanted. I didn't know whether I could
                        "make it" in the real world as a software developer. nor
                        did I know whether I was still going to enjoy it by the
                        time I'd spent 4 years studying and practicing at
                        University. All I knew is that it is something I enjoyed
                        at the time and everyone's advice was (and still is) "do
                        what you love". So I went for it!
                    </p>
                    <p>
                        I applied to a range of Universities and eventually
                        managed to get in to{" "}
                        <Anchor href="https://www.lboro.ac.uk/" isExternalLink>
                            Loughborough University
                        </Anchor>
                        . I was thrilled, it was (and still is) a fantastic
                        university and I was lucky to get in there with my
                        disappointing A Level grades (but that's a story another
                        time).
                    </p>
                    <h3>Placement Year</h3>
                    <p>
                        One of the best things I've ever done is take a
                        placement year (a.k.a. year in industry). I got offered
                        a place at{" "}
                        <Anchor href="https://www.redweb.com/" isExternalLink>
                            Redweb
                        </Anchor>{" "}
                        where I got the opportunity to spend the first half of
                        the year as a back-end developer and the second half as
                        a front-end developer (which was really good of them
                        because it's the first time they'd let someone do
                        both!).
                    </p>
                    <h4>Part 1: Back-End Developer Experience</h4>
                    <p>
                        I was tasked with making a social media management
                        extension for{" "}
                        <Anchor href="https://umbraco.com/" isExternalLink>
                            Umbraco
                        </Anchor>{" "}
                        v6 (a content management system that Redweb used for
                        some projects). It gave me a really good chance to get
                        my bearings writing a C# .NET WebForms, learn all about
                        oAuth and get to grips with Facebook and Twitter's APIs.
                        By the end of the 6 months I'd managed to create an
                        installable Umbraco extension which let you sign in to
                        multiple Facebook and Twitter accounts and post to any
                        number of them simultaneously. It looked like trash but
                        it was very functional!
                    </p>
                    <h4>Part 2: Front-End Developer Experience</h4>
                    <p>
                        Rather than one big project I was given all sorts of
                        tasks to do. So many in fact that I've forgotten most of
                        them! The one I remember most clearly was crating a
                        JavaScript library to geo-fence an area and inform you
                        whether you were in or out of the geo-fenced area using
                        the browser's{" "}
                        <Anchor
                            href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
                            isExternalLink
                        >
                            Geolocation API
                        </Anchor>
                        . It was really good fun to build and worked really
                        well! The idea was that we could use it on client work
                        to vary the content on a website depending on whether
                        the user was in certain places (e.g. if the client had
                        physical stores we could show content to the customer
                        when they entered/left a store).
                    </p>
                    <p>
                        I really enjoyed my time as a front-end developer and
                        decided that's what I wanted to focus my efforts on
                        going forward.
                    </p>
                    <h4>The Job Offer</h4>
                    <p>
                        I was totally thrilled to get a job offer from Redweb
                        before my placement year was done. I'd loved my time
                        there and couldn't wait to finish university so I could
                        get back to work!
                    </p>
                    <h3>Final Year</h3>
                    <p>
                        It was tough. So much tougher than the first 2 years. I
                        worked incredibly hard, especially on my Final Year
                        Project.
                    </p>
                    <p>
                        My project was inspired by an issue that the Redweb
                        front-end developers faced almost daily; the test
                        devices kept going missing! There was no way to know
                        who'd taken a device so you'd have to wonder round the
                        whole office trying to find it. My solution was to
                        create a system of checking the devices in and out so
                        that we'd always know which devices were free, and if
                        they weren't free, who had taken them.
                    </p>
                    <p>
                        I used{" "}
                        <Anchor href="https://angularjs.org/" isExternalLink>
                            Angular v1
                        </Anchor>{" "}
                        to power the UI and{" "}
                        <Anchor href="https://socket.io/" isExternalLink>
                            Socket.io
                        </Anchor>{" "}
                        to keep the UI up-to-date. it was the first time I'd
                        built anything using WebSockets and Socket.io made it an
                        absolute breeze. Writing some software was cool but I
                        wanted my project to stand out, and I was inspired by
                        some of the people at Redweb to incorporate some
                        hardware. I'd seen some of the things that they'd
                        managed to build with and{" "}
                        <Anchor href="https://www.arduino.cc/" isExternalLink>
                            Arduino
                        </Anchor>{" "}
                        and it was awesome. If I could add that into my project
                        it could really set it apart from the others.
                    </p>
                    <p>
                        Knowing nothing about electronics I was impressed that I
                        managed to solder my Arduino board together and get an
                        LED to blink on and off...so far so good! My end-goal
                        was to use photoresistors (light sensors) and an RFID
                        reader to make the act of checking out a device as easy
                        as possible. The general idea was that each device sits
                        on its own dedicated stand, onto which I could attach a
                        photoresistor. When there's no light hitting the sensor
                        the device is on its stand, otherwise it has been taken
                        off its stand. After the state of a photoresistor
                        changes from "no light" to "light" the person picking up
                        the device swipes their staff pass on the RFID reader.
                        So we know that Staff Member X has checked out Device Y.
                        And of course, when the photoresistor senses a change of
                        "light" to "no light" it would update the system to tell
                        people that the Device Y is now free again. How hard
                        could that be!?
                    </p>
                    <p>
                        It was an absolute nightmare. I had no idea what I was
                        doing. I didn't think I was going to be able to have
                        something worth showing at my project presentation
                        because I'd bitten off more than I could chew! But
                        finally, by some miracle, I managed to get a proof of
                        concept working in time. Fortunately everything went
                        really smoothly during the demo and the lecturers
                        absolutely loved the use of the Arduino.
                    </p>
                    <p>
                        After all that, I had proudly achieved a First Class
                        Honours Degree in Web Development and Design. Even today
                        I am still so pleased with what I managed to achieve.
                    </p>
                    <h2>Work</h2>
                    <h3>Redweb (2015 - 2017)</h3>
                    <p>
                        I began working for Redweb as a Front-End Developer
                        shortly after graduating from university. As a
                        relatively junior member of the team I was mostly
                        responsible for creating the components for large sites
                        built on top of{" "}
                        <Anchor href="https://www.sitecore.com/" isExternalLink>
                            Sitecore
                        </Anchor>{" "}
                        (a content management system).
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
                    <p>
                        I can honestly say I have massively grown as a developer
                        as a result of working here. Although my job title is
                        Front-End Software Engineer I have essentially become a
                        full-stack developer...because I can! Their stance is
                        "If you know you can do the job, get it done! Otherwise,
                        feel free to ask the help of someone who can." which is
                        a lot more freedom than I had in my previous job.
                    </p>
                    <p>
                        Working here I have learned a lot about building .NET /{" "}
                        <Anchor
                            href="https://docs.microsoft.com/en-gb/dotnet/core/"
                            isExternalLink
                        >
                            .NET Core
                        </Anchor>{" "}
                        MVC applications and services. As for front-end
                        technologies, I've also learned about{" "}
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
