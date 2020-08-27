module.exports = {
    purge: [
        "./components/**/*.{ts,tsx}",
        "./utils/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./posts/**/*.md",
    ],
    theme: {
        extend: {
            maxWidth: {
                "10": "10rem",
            },
        },
        container: {
            center: true,
            padding: {
                default: "1rem",
            },
        },
        fill: (theme) => ({
            current: "currentColor",
            "red-700": theme("colors.red.700"),
        }),
    },
    variants: {},
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    width: "100%",

                    "@screen sm": {
                        maxWidth: "640px",
                    },
                    "@screen md": {
                        maxWidth: "768px",
                    },
                    "@screen lg": {
                        maxWidth: "1000px",
                    },
                    "@screen xl": {
                        maxWidth: "1000px",
                    },
                },
            });
        },
    ],
};
