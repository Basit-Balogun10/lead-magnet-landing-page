module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./containers/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                pacifico: ["Pacifico", "sans-serif"],
            },
            colors: {
                mainColor: "#000",
                textColor: "#55617b",
            },
        },
    },
    plugins: [],
};
