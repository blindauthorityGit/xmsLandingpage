// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // screens: {
            //     sm: "640px",
            //     md: "768px",
            //     lg: "1024px",
            //     xl: "1380px",
            //     "2xl": "2140px",
            // },
            // container: {
            //     sm: "100%",
            //     md: "960px",
            //     lg: "1364px",
            //     xl: "1580px",
            // },
            fontFamily: {
                ...fontFamily,
                work: ["Outfit", "sans-serif"],
            },
            colors: {
                primaryColor: {
                    DEFAULT: "#fa6d76",
                    50: "#fef2f3",
                    100: "#fee2e4",
                    200: "#ffc9cc",
                    300: "#fda4aa",
                    400: "#fa6d76",
                    500: "#f2414c",
                    600: "#df232f",
                    700: "#bb1a24",
                    800: "#9b1921",
                    900: "#801c22",
                    950: "#46090d",
                },
                accentColor: {
                    DEFAULT: "#fa6d76",
                    50: "#fef2f3",
                    100: "#fee2e4",
                    200: "#ffc9cc",
                    300: "#fda4aa",
                    400: "#fa6d76",
                    500: "#f2414c",
                    600: "#df232f",
                    700: "#bb1a24",
                    800: "#9b1921",
                    900: "#801c22",
                    950: "#46090d",
                },
                darkColor: {
                    DEFAULT: "#2B2D42",
                    50: "#7B7FA9",
                    100: "#6F73A1",
                    200: "#5B608C",
                    300: "#4B4F73",
                    400: "#3B3E5B",
                    500: "#2B2D42",
                    600: "#151620",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                    950: "#000000",
                },
                whiteText: "#EAF0FE",
                darkText: "#4C4D4F",
                darkBG: "#1B1B1C",
                bg: "#FBFBF5",
                redColor: "#FE654F",
                greenColor: "#61E8E1",
                darkRed: "#444140",
            },
            height: {
                "calc-screen": "calc(100vh - 5rem)",
            },
        },
    },
    plugins: [],
};
