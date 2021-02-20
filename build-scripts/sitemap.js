const fs = require("fs");
const SitemapStream = require("sitemap").SitemapStream;
const streamToPromise = require("sitemap").streamToPromise;
const posts = require("../data/blogPost.json");
const postHelpers = require("./posts");

(async () => {
    try {
        const smStream = new SitemapStream({
            hostname: `https://ryanmaffey.dev`,
        });

        const add = (url) => {
            smStream.write({
                url,
                changefreq: "monthly",
                priority: 0.9,
            });
        };

        ["/", "/about", "/resources", "/cookies", "/privacy", "/posts"].forEach(
            add
        );

        // Posts.
        posts.forEach((p) => add(`/post/${p.slug}`));

        // Tags.
        add("tags");
        postHelpers
            .getAllTagsFromPosts(posts)
            .forEach((id) => add(`/tag/${id}`));

        // Series.
        postHelpers
            .getAllSeriesFromPosts(posts)
            .forEach((id) => add(`/series/${id}`));

        smStream.end();

        const sitemapOutput = (await streamToPromise(smStream)).toString();

        fs.writeFileSync("out/sitemap.xml", sitemapOutput);
    } catch (e) {
        console.log(e);
    }
})();
