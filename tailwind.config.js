const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      blue: {
        dark: "#4338ca",
        DEFAULT: "#c7d2fe",
        light: "#eef2ff",
      },
      green: {
        dark: "#15803d",
        DEFAULT: "#bbf7d0",
        light: "#f0fdf4",
      },
      yellow: {
        dark: "#a16207",
        DEFAULT: "#fef08a",
        light: "#fefce8",
      },
      red: {
        dark: "#dc2626",
        DEFAULT: "#fecaca",
        light: "#fef2f2",
      },
      neutral: {
        dark: "#171717",
        DEFAULT: "#52525b",
        light: "#e5e5e5",
      },
      grey: {
        light: "#f9fafb",
        DEFAULT: "#e5e7eb",
        dark: "#9ca3af",
      },
    },
    fontSize: {
      xs: ["12px", { lineHeight: "16px" }],
      sm: ["14px", { lineHeight: "20px" }],
    },
    fontFamily: {
      notoSans: "'Noto Sans', sans-serif",
    },
  },
  plugins: [],
};
