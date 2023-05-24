// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ...fontFamily,
                work: ["Work Sans", "sans-serif"],
            },
            colors: {
                primaryColor: {
                    DEFAULT: "#4AA069",
                    50: "#C0E2CC",
                    100: "#B2DBC1",
                    200: "#96CEAA",
                    300: "#7AC294",
                    400: "#5EB57D",
                    500: "#4AA069",
                    600: "#387A50",
                    700: "#275337",
                    800: "#152D1D",
                    900: "#030704",
                    950: "#000000",
                },
                accentColor: {
                    DEFAULT: "#EDFF7A",
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#FEFFF4",
                    300: "#F8FFCC",
                    400: "#F3FFA3",
                    500: "#EDFF7A",
                    600: "#E5FF42",
                    700: "#DEFF0A",
                    800: "#B4D100",
                    900: "#849900",
                    950: "#6C7D00",
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
