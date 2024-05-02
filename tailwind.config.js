/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "14p": "14px",
        "13p": "13px",
      },
      colors: {
        themeGreen: "#01D167",
        themeDarkBlue: "#0C365A",
        themeLightBlue: "#325BAF",
        lightBlue: "#009DFF1A",
        lightGrey: "#AAAAAA",
        lightGreen: "#00D6B51A",
        bgGreen: "#EDFFF5",
        lightPink: "#F251951A",
        borderGreen: "#DDFFEC",
      },
    },
  },
  plugins: [],
};
