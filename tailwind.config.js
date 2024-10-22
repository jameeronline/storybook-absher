/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  mode: "jit",
  //prefix: 'tw-',
  darkMode: "class",
  content: ["./stories/**/*.{html,js,mdx}"],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: "#ecfff6",
        //   100: "#d2ffed",
        //   200: "#a8ffdc",
        //   300: "#65ffc2",
        //   400: "#1bffa1",
        //   500: "#00f982",
        //   600: "#00d068",
        //   700: "#00a255",
        //   800: "#007e47",
        //   900: "#00663d",
        //   950: "#003b20",
        // },
        primary: colors.emerald,
        secondary: colors.stone,
        tertiary: colors.slate,
        danger: colors.red,
        success: colors.emerald,
        info: colors.cyan,
        warning: colors.amber,
        typo: colors.gray,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
