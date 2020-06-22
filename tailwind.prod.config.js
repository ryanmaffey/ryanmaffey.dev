const shared = require("./tailwind.shared.config");

module.exports = {
    ...shared,
    purge: {
        enabled: true,
        content: [".eleventy.js", "./**/*.njk"],
    },
};
