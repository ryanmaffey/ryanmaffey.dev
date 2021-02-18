const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const PAGE_SIZE = require("../constants/pagination").PAGE_SIZE;

const getAllPostData = async () => {
    const fileNames = fs.readdirSync("posts");
    return fileNames
        .map((f) => {
            const fullPath = path.join("posts", f);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the id
            return {
                id: f.replace(".md", ""),
                meta: matterResult.data,
            };
        })
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
};

(async () => {
    try {
        if (!fs.existsSync("public/api/")) {
            fs.mkdirSync("public/api/");
        }

        if (!fs.existsSync("public/api/posts/")) {
            fs.mkdirSync("public/api/posts/");
        }

        const postData = chunkArray(await getAllPostData(), PAGE_SIZE);

        postData.map((data, index) => {
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
