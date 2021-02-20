require("dotenv").config();
const fs = require("fs");
const path = require("path");
const createClient = require("contentful").createClient;

const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
});

const types = ["page", "blogPost"];

const getcontent = async () => {
    for (const type of types) {
        const entries = await client.getEntries({
            content_type: type,
        });
        fs.writeFileSync(
            path.join(__dirname, "..", "data", `${type}.json`),
            JSON.stringify(entries.items.map((i) => i.fields))
        );
    }

    return true;
};

if (process.argv[2] === "install") {
    getcontent();
}

module.exports = { getcontent };
