module.exports = {
    purge: [
        "./components/**/*.{ts,tsx}",
        "./utils/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx,md}",
        "./posts/**/*.md",
    ],
    theme: {
        extend: {
            maxWidth: {
                10: "10rem",
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
            "purple-500": theme("colors.purple.500"),
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
