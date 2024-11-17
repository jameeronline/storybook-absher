/** @type { import('@storybook/html').Preview } */
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

//JS functions
// main.js
import { initializeTabs } from "../scripts/tab";
import { initDropdownInteractions } from "../scripts/dropdown";

document.addEventListener("DOMContentLoaded", () => {
  initializeTabs();
  initDropdownInteractions();
});

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
      defaultTheme: "dark",
    }),
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          "Getting Started",
          "StyleGuide",
          [
            "Introduction",
            "Colors",
            "Typography",
            "Icons",
            "Spacing",
            "Utilities",
            "Assets",
            "*",
          ],
          "Design Tokens",
          "Components",
          "Form Elements",
          "Navigation",
          "Feedback",
          "Templates",
          "Pages",
          [
            "Welcome",
            "Form",
            "Data Table",
            "Confirmation",
            "Payment",
            "Success",
          ],
          "*",
        ],
      },
    },
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
