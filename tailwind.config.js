module.exports = {
    purge: [
        "./components/**/*.{ts,tsx}",
        "./utils/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
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
