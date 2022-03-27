module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cgreen: "#3b6837",
        ctextbase: "#08102b",
        customgreen: "#92c34f",
        custom_gray: "#D8D8D8",
        custom_border: "#E1E1E1",
        custom_green: "#79B625",
        custom_lightgreen: "#D5E8C6",
      },
      boxShadow: {
        custom1: "0 8px 25px 0 rgba(0, 0, 0, 0.05)",
        custom2: "0 8px 25px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
