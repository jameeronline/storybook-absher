/** @type { import('@storybook/html').Preview } */

//tailwind css
import "../style/output.css";
import "../style/custom-control.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "../node_modules/@glidejs/glide/dist/css/glide.theme.min.css";

//UI config
const preview = {
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
