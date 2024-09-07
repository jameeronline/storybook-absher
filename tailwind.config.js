/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  content: ["./stories/**/*.{html,js,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        secondary: colors.stone,
        danger: colors.red,
        success: colors.green,
        info: colors.sky,
        warning: colors.amber,
        typo: colors.gray,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
