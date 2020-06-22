const shared = require("./postcss.shared.config");

module.exports = {
    ...shared,
    plugins: [
        ...shared.plugins,
        require("cssnano")({
            preset: "default",
        }),
    ],
};
