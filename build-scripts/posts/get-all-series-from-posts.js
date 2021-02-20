const getAllSeriesFromPosts = (posts) => [
    ...new Set(posts.filter((p) => p.series).map((p) => p.series)),
];

module.exports = getAllSeriesFromPosts;
