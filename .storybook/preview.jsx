/** @type { import('@storybook/html').Preview } */
import { withThemeByClassName } from "@storybook/addon-themes";

//Dark Mode / Light Mode
import { themes } from "@storybook/theming";

//icons
import { DarkIcon, LightIcon, AbsherIcon } from "./icons";

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

// Define your theme options
const themeOptions = [
  { value: "light", title: "Light Theme", icon: "lightning" },
  { value: "dark", title: "Dark Theme", icon: "lightningoff" },
];

// Define your environment options
const environmentOptions = [
  { value: "indi", title: "Individual", icon: "useralt" },
  { value: "busi", title: "Business", icon: "admin" },
  { value: "gov", title: "Government", icon: "flag" },
];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "lightning",
      items: themeOptions.map((theme) => ({
        value: theme.value,
        title: theme.title,
        icon: theme.icon,
      })),
    },
  },
  environment: {
    name: "Environment",
    description: "Website environment",
    defaultValue: "indi",
    toolbar: {
      icon: "globe",
      items: environmentOptions.map((env) => ({
        value: env.value,
        title: env.title,
        icon: env.icon,
      })),
    },
  },
};

//UI config
const preview = {
  decorators: [
    (Story, context) => {
      const { theme, environment } = context.globals;

      // Apply theme and environment-specific logic here
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-environment", environment);

      //format HTML
      const storyOutput = Story(); // Get the Story output (HTMLElement or string)
      const formattedHTML = getFormattedHtml(storyOutput); // Format the HTML based on type
      return `${formattedHTML}`; // Return formatted HTML
    },
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
          "Typography",
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
