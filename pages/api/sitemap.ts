import { SitemapStream, streamToPromise } from "sitemap";
import { getAllPostIds } from "../../lib/posts";

export default async (req: any, res: any) => {
    try {
        const smStream = new SitemapStream({
            hostname: `https://${req.headers.host}`,
            cacheTime: 600000,
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
            url: `/posts`,
            changefreq: "monthly",
            priority: 0.9,
        });

        // List of posts
        const posts = (await getAllPostIds()).map((p) => p.params.id);

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

        // Change headers
        res.writeHead(200, {
            "Content-Type": "application/xml",
        });

        // Display output to user
        res.end(sitemapOutput);
    } catch (e) {
        console.log(e);
        res.send(JSON.stringify(e));
    }
};
