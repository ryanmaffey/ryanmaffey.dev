const fs = require("fs");
const path = require("path");
const posts = require("../data/blogPost.json");
const PAGE_SIZE = require("../constants/pagination").PAGE_SIZE;

const getAllPostData = async () => {};

(async () => {
    try {
        if (!fs.existsSync("public/api/")) {
            fs.mkdirSync("public/api/");
        }

        if (!fs.existsSync("public/api/posts/")) {
            fs.mkdirSync("public/api/posts/");
        }

        const postsSorted = posts
            .map((p) => {
                delete p.body;
                return p;
            })
            .sort(
                (a, b) =>
                    new Date(b.publishDate).getTime() -
                    new Date(a.publishDate).getTime()
            );

        chunkArray(postsSorted, PAGE_SIZE).map((data, index) => {
            fs.writeFile(
                `public/api/posts/page-${index}.json`,
                JSON.stringify(data),
                (err) => {
                    if (err) console.log(err);
                }
            );
        });
    } catch (e) {
        console.log(e);
    }
})();

function chunkArray(inputArray, perChunk) {
    return inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);
}

module.exports = {
    getAllPostData,
};
