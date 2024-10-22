/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-themes",
    "storybook-addon-rtl",
    //"storybook-dark-mode",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
};
export default config;
