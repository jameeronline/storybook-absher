/** @type { import('@storybook/html').Preview } */

//tailwind css
import "../style/output.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

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
  },
};

export default preview;
