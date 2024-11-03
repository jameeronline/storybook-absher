import { create } from "@storybook/theming";

export default create({
  base: "light", // Defines the base theme as 'light' (alternative: 'dark')

  // Typography
  fontBase: '"Roboto", sans-serif', // The primary font used throughout the UI
  fontCode: "monospace", // Font used for code blocks and monospaced text

  // Branding
  brandTitle: "Government Agency Storybook", // The title that appears in the Storybook toolbar
  brandUrl: "https://example.gov", // The URL to which the title/logo links
  brandImage: "https://storybook.js.org/images/placeholders/350x150.png", // The logo image displayed in the Storybook toolbar
  brandTarget: "_self", // The target behavior when clicking the logo (default opens in same tab)

  // Colors
  colorPrimary: "#00663D", // Primary color used in key UI elements (e.g., selected states, highlights)
  colorSecondary: "#008850", // Secondary color used for emphasis or contrasting UI elements

  // UI
  appBg: "#F0F9F5", // Background color for the overall app (outside the main content area)
  appContentBg: "#FFFFFF", // Background color for the main content area where stories are displayed
  appPreviewBg: "#F5F5F5", // Background color for the preview area (where components are rendered)
  appBorderColor: "#D1D5DB", // Border color used around elements like panels and inputs
  appBorderRadius: 4, // Border radius for UI elements to ensure consistent rounded corners

  // Text colors
  textColor: "#10162F", // Default text color used throughout the UI for better readability
  textInverseColor: "#FFFFFF", // Text color used when on a dark background (inverse of the default)

  // Toolbar default and active colors
  barTextColor: "#4F4F4F", // Default text color used for toolbar labels and items
  barSelectedColor: "#00663D", // Color for selected toolbar items (e.g., active tabs, buttons)
  barHoverColor: "#004F2A", // Hover color for toolbar items, slightly darker than the primary color
  barBg: "#FFFFFF", // Background color for the toolbar

  // Form colors
  inputBg: "#FFFFFF", // Background color for form inputs (e.g., text fields, dropdowns)
  inputBorder: "#00663D", // Border color for form inputs (primary color for consistency)
  inputTextColor: "#10162F", // Text color inside form inputs
  inputBorderRadius: 4, // Border radius for form inputs, keeping consistent rounded corners
});
