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
import "../style/preview-ui.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "../node_modules/@glidejs/glide/dist/css/glide.theme.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "../node_modules/flatpickr/dist/flatpickr.css";

//UI config
const preview = {
  decorators: [
    (Story) => {
      const storyOutput = Story(); // Get the Story output (HTMLElement or string)
      console.log(storyOutput);
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
    //darkMode: {
    //darkClass: "lights-out",
    //lightClass: "lights-on",
    //dark: { ...themes.dark, appBg: "#00663D" }, // Override the default dark theme
    //light: { ...themes.normal, appBg: "#09572B" }, // Override the default light theme
    //},
  },
};

export default preview;
