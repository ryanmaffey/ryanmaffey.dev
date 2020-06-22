module.exports = {
    theme: {
        extend: {
            colors: {
                gray: {
                    "700": "#34495e",
                    "800": "#282C34",
                    "900": "#1D1F23",
                },
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
                        maxWidth: "1024px",
                    },
                    "@screen xl": {
                        maxWidth: "1024px",
                    },
                },
            });
        },
    ],
};
