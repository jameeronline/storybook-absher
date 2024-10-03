/** @type { import('@storybook/html').Preview } */

//import { Preview, Renderer } from "@storybook/your-renderer";
import { withThemeByClassName } from "@storybook/addon-themes";

//Dark Mode / Light Mode
import { themes } from "@storybook/theming";

//format html
import { getFormattedHtml } from "../stories/utilities/code-format";

//tailwind css
import "../style/output.css";
import "../style/custom-control.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "../node_modules/@glidejs/glide/dist/css/glide.theme.min.css";

//UI config
const preview = {
  decorators: [
    (Story) => {
      const storyOutput = Story(); // Get the Story output (HTMLElement or string)
      const formattedHTML = getFormattedHtml(storyOutput); // Format the HTML based on type
      return `${formattedHTML}`; // Return formatted HTML
    },
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
  parameters: {
    //layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    html: {
      prettier: {
        tabWidth: 2,
        useTabs: false,
        htmlWhitespaceSensitivity: "strict",
        proseWrap: "always",
        singleAttributePerLine: true,
      },
    },
  },
};

export default preview;

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "red" },
  },
};
