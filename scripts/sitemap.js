const fs = require("fs");
const SitemapStream = require("sitemap").SitemapStream;
const streamToPromise = require("sitemap").streamToPromise;

const getAllPostIds = async () => {
    const fileNames = fs.readdirSync("posts");
    return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
};

(async () => {
    try {
        const smStream = new SitemapStream({
            hostname: `https://ryanmaffey.dev`,
        });

        smStream.write({
            url: `/`,
            changefreq: "monthly",
            priority: 0.9,
        });

        smStream.write({
            url: `/about`,
            changefreq: "monthly",
            priority: 0.9,
        });

        smStream.write({
            url: `/resources`,
            changefreq: "monthly",
            priority: 0.9,
        });

        smStream.write({
            url: `/cookies`,
            changefreq: "monthly",
            priority: 0.9,
        });

        smStream.write({
            url: `/posts`,
            changefreq: "monthly",
            priority: 0.9,
        });

        // List of posts
        const posts = await getAllPostIds();

        // Create each URL row
        posts.forEach((post) => {
            smStream.write({
                url: `/post/${post}`,
                changefreq: "monthly",
                priority: 0.9,
            });
        });

        // End sitemap stream
        smStream.end();

        // XML sitemap string
        const sitemapOutput = (await streamToPromise(smStream)).toString();

        fs.writeFileSync("out/sitemap.xml", sitemapOutput);
    } catch (e) {
        console.log(e);
    }
})();
