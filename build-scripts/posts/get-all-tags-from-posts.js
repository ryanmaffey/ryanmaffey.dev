const getAllTagsFromPosts = (posts) => {
    let obj = {};

    posts.forEach((post) => {
        if (!post.tags) {
            return;
        }

        post.tags.forEach((tag) => {
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

module.exports = getAllTagsFromPosts;
