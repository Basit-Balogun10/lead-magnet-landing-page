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
                mainColor: "#f42127",
                textColor: "#031322",
            },
        },
    },
    plugins: [],
};
