import { create } from "@storybook/theming";

export default create({
  base: "light",
  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: "monospace",

  brandTitle: "Government Agency Storybook",
  brandUrl: "https://example.gov",
  brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  brandTarget: "_self",

  // Colors
  colorPrimary: "#00663D", // Primary color (Government green)
  colorSecondary: "#002C5F", // Secondary color for contrast (Navy blue)

  // UI
  appBg: "#F5F5F5", // Light background to make content stand out
  appContentBg: "#FFFFFF",
  appPreviewBg: "#F5F5F5",
  appBorderColor: "#D1D5DB", // Subtle border
  appBorderRadius: 4,

  // Text colors
  textColor: "#10162F", // Dark text for clarity
  textInverseColor: "#FFFFFF",

  // Toolbar default and active colors
  barTextColor: "#4F4F4F",
  barSelectedColor: "#00663D", // Highlight with primary color
  barHoverColor: "#004F2A", // Slightly darker green for hover state
  barBg: "#FFFFFF",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#00663D", // Primary color for form inputs
  inputTextColor: "#10162F",
  inputBorderRadius: 4,
});
