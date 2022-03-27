module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_border: "#E1E1E1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
