/** @type { import('@storybook/html').Preview } */
//import React from "react";
//import { DocsContainer } from "@storybook/addon-docs";
//import Documentation from "./Documentation.mdx";

//import { Preview, Renderer } from "@storybook/your-renderer";
import { withThemeByClassName } from "@storybook/addon-themes";
//import { DocsContainer } from "@storybook/addon-docs";
import {
  Canvas,
  Controls,
  Meta,
  Unstyled,
  Story,
  Primary,
  Stories,
  Source,
  Title,
  Subtitle,
  Description,
} from "@storybook/blocks";

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
      defaultTheme: "light",
    }),
  ],
  parameters: {
    //layout: "centered",
    //docs: {
    //container: DocsContainer,
    //page: Documentation,
    // page: () => {
    //   return (
    //     <Unstyled>
    //       <article className="prose max-w-none">
    //         <Title />
    //         <Subtitle />
    //         <Description />
    //         <div className="bg-emerald-50 px-6 py-2">
    //           <Primary />
    //           <Controls />
    //         </div>
    //         <h2>Variants</h2>
    //         <Stories />
    //       </article>
    //     </Unstyled>
    //   );
    // },
    //},
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
          ["*"],
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
    //darkMode: {
    //darkClass: "lights-out",
    //lightClass: "lights-on",
    //dark: { ...themes.dark, appBg: "#00663D" }, // Override the default dark theme
    //light: { ...themes.normal, appBg: "#e1f4e9" }, // Override the default light theme
    //},
  },
};

export default preview;
