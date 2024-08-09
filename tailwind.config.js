const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        brand: {
          dark: colors.indigo["700"],
          DEFAULT: colors.indigo["200"],
          light: colors.indigo["50"],
          emphasize: colors.indigo["800"],
        },
        success: {
          dark: colors.green["700"],
          DEFAULT: colors.green["200"],
          light: colors.green["50"],
        },
        warning: {
          dark: colors.amber["700"],
          DEFAULT: colors.amber["200"],
          light: colors.amber["50"],
        },
        error: {
          dark: colors.red["600"],
          DEFAULT: colors.red["200"],
          light: colors.red["50"],
          emphasize: colors.red["700"],
        },
        neutral: {
          dark: colors.neutral["900"],
          DEFAULT: colors.neutral["600"],
          light: colors.neutral["200"],
          emphasize: colors.neutral["50"],
          disabled: colors.neutral["400"],
          disabled_bg: colors.neutral["100"],
        },
        gray: colors.gray["50"],
      },
    },
    fontSize: {
      xs: ["12px", { lineHeight: "16px" }],
      sm: ["14px", { lineHeight: "20px" }],
      lg: ["16px", { lineHeight: "24px" }],
      xxl: ["18px", { lineHeight: "28px" }],
    },
    fontFamily: {
      notoSans: "'Noto Sans', sans-serif",
    },
  },
  plugins: [],
};
