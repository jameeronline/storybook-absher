import { createAccordion } from "./Accordion";

export default {
  title: "Components/Accordion",
  tags: ["autodocs"],
  render: createAccordion,
  argTypes: {
    withIcon: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Shows an icon beside the accordion title",
    },
    outline: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Adds an outline around the accordion",
    },
    elevated: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Adds a shadow effect for elevation",
    },
    toggleIcon: {
      control: { type: "select" },
      options: [
        "bi-x",
        "bi-chevron-down",
        "bi-plus",
        "bi-arrow-down",
        "bi-caret-down",
      ],
      defaultValue: "bi-x",
      description: "Select the icon used for accordion toggle",
    },
    content: {
      control: { type: "object" },
      description:
        "An array of accordion items containing icon, title, and description",
      defaultValue: [
        {
          icon: "bi bi-info-circle",
          title: "How does TailwindCSS work?",
          description:
            "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles, and then writing them to a static CSS file.",
        },
        {
          icon: "bi bi-info-circle",
          title: "How do I install TailwindCSS?",
          description:
            "The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. Install tailwindcss via npm, and create your tailwind.config.js file.",
        },
      ],
    },
  },
  args: {
    content: [
      {
        icon: "bi bi-palette",
        title: "What is a Design System?",
        description:
          "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
      },
      {
        icon: "bi bi-columns-gap",
        title: "Why Use a Design System?",
        description:
          "Design systems ensure consistency across multiple projects, improve efficiency in development, and provide a shared language between designers and developers.",
      },
      {
        icon: "bi bi-layers",
        title: "Core Components of a Design System",
        description:
          "A design system consists of UI components, patterns, and guidelines for interaction, design tokens, and documentation that all teams can refer to.",
      },
      {
        icon: "bi bi-code-slash",
        title: "How to Implement a Design System",
        description:
          "Implementing a design system requires setting up tools like Storybook for UI documentation, ensuring your components are accessible, and integrating with your development pipeline.",
      },
      {
        icon: "bi bi-card-list",
        title: "Design Tokens Explained",
        description:
          "Design tokens are a system of variables used to store design-related values such as colors, typography, and spacing, allowing for consistency across platforms and products.",
      },
    ],
    withIcon: false,
    outline: false,
    elevated: false,
    toggleIcon: "bi-chevron-down",
  },
};

// Variants
export const Basic = {
  args: {
    withIcon: false,
    outline: false,
    elevated: false,
  },
};

export const WithIcon = {
  args: {
    withIcon: true,
  },
};

export const Outlined = {
  args: {
    outline: true,
  },
};

export const Elevated = {
  args: {
    elevated: true,
  },
};

export const WithIconOutlined = {
  args: {
    withIcon: true,
    outline: true,
  },
};

export const WithIconElevated = {
  args: {
    withIcon: true,
    elevated: true,
  },
};

export const CustomToggleIcon = {
  args: {
    toggleIcon: "bi-arrow-down",
  },
};
