import { createFooter } from "./Footer";

// Default export for the component stories
export default {
  title: "Templates/Footer", // Group in Storybook under "Components/Footer"
  tags: ["autodocs"],
  render: createFooter,
  argTypes: {
    footerLinks: { control: "object" }, // Use object control in Storybook UI
    brand: { control: "object" },
    theme: {
      control: {
        type: "select",
        options: ["light", "dark", "primary"], // Theme selection
      },
    },
    withSubfooter: { control: "boolean" }, // Boolean switch in Storybook
    withBrandColumn: { control: "boolean" }, // Boolean switch in Storybook
    numberOfColumns: {
      control: {
        type: "select",
        options: [3, 4, 5], // Options for number of columns
      },
    },
  },
  args: {
    footerLinks: [
      {
        title: "Product",
        list: [
          { label: "Features", url: "#" },
          { label: "Customers", url: "#" },
          { label: "Why Us?", url: "#" },
        ],
      },
      {
        title: "Docs & Help",
        list: [
          { label: "Documentation", url: "#" },
          { label: "System Status", url: "#" },
          { label: "Help Center", url: "#" },
        ],
      },
      {
        title: "Company",
        list: [
          { label: "About Us", url: "#" },
          { label: "Careers", url: "#" },
          { label: "Blog", url: "#" },
        ],
      },
      {
        title: "Contact",
        list: [
          { label: "Contact Us", url: "#" },
          { label: "Support", url: "#" },
          { label: "Partners", url: "#" },
        ],
      },
    ],
    brand: {
      name: "BrandName",
      description: "The best components library for developers.",
    },
    theme: "light", // Default theme
    withSubfooter: false, // No subfooter by default
    numberOfColumns: 4, // Default to 4 columns
  },
};

// Default Story - with all arguments
export const DefaultFooter = { args: {} };

// Dark Theme Story
export const DarkFooter = {
  args: {
    theme: "dark", // Dark theme
  },
};

// Primary Theme Story
export const PrimaryFooter = {
  args: {
    theme: "primary", // Primary theme
  },
};

// Footer with Subfooter Story
export const FooterWithSubfooter = {
  args: {
    withSubfooter: true, // Enable subfooter
  },
};

// 5-Column Layout Story
export const FiveColumnFooter = {
  args: {
    numberOfColumns: 5, // 5 columns layout
  },
};

// 3-Column Layout Story
export const ThreeColumnFooter = {
  args: {
    numberOfColumns: 3, // 3 columns layout
  },
};
