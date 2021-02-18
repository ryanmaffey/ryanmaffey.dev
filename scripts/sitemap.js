const fs = require("fs");
const SitemapStream = require("sitemap").SitemapStream;
const streamToPromise = require("sitemap").streamToPromise;
const getAllPostData = require("./generate-api-data-for-posts.js")
    .getAllPostData;

const getTagsFromPosts = (posts) => {
    let obj = {};

    posts.forEach((post) => {
        if (!post.meta.tags) {
            return;
        }

        post.meta.tags.forEach((tag) => {
            if (!obj[tag]) {
                obj[tag] = 1;
                return;
            }

            obj[tag]++;
        });
    });

    return Object.entries(obj)
        .sort((a, b) => b[1] - a[1])
        .map((x) => x[0]);
};

const getSeriesFromPosts = (postData) => {
    return [
        ...new Set(
            postData
                .filter((p) => p.meta && p.meta.series)
                .map((p) => p.meta.series)
        ),
    ];
};

(async () => {
    const postData = await getAllPostData();

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
        postData.forEach((p) => add(`/post/${p.id}`));

        // Tags.
        add("tags");
        getTagsFromPosts(postData).forEach((id) => add(`/tag/${id}`));

        // Series.
        getSeriesFromPosts(postData).forEach((id) => add(`/series/${id}`));

        smStream.end();

        const sitemapOutput = (await streamToPromise(smStream)).toString();

        fs.writeFileSync("out/sitemap.xml", sitemapOutput);
    } catch (e) {
        console.log(e);
    }
})();
