module.exports = {
    purge: [
        "./components/**/*.{ts,tsx}",
        "./utils/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    "100": "#f7fafc",
                    "700": "#34495e",
                    "800": "#282C34",
                    "900": "#1D1F23",
                },
            },
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
