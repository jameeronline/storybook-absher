import { createFileUpload } from "./FileInput";

import { baseTypeVariant } from "../../../config/config";

// Default export for Storybook
export default {
  title: "Form Elements / FileUpload",
  tags: ["autodocs"],
  render: createFileUpload,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
      description: "Determines the size of the file upload button",
      defaultValue: "default",
    },
    onlyIcon: {
      control: { type: "boolean" },
      description: "Determines if the button only shows an icon",
      defaultValue: false,
    },
    rounded: {
      control: { type: "boolean" },
      description: "Determines if the button only shows an icon",
      defaultValue: false,
    },
    variant: {
      control: { type: "select" },
      options: baseTypeVariant,
      description: "Determines the color style of the file upload button",
      defaultValue: "primary",
    },
    label: {
      control: { type: "text" },
      description: "The label text of the file upload button",
      defaultValue: "Upload a file",
    },
  },
  args: {
    size: "default",
    onlyIcon: false,
    rounded: false,
    variant: "primary",
    label: "Upload a file",
  },
};

// Template function for creating the component
const Template = (args) => {
  return createFileUpload(args);
};

// Define variations of the component as stories
export const Default = {
  args: {
    size: "default",
    onlyIcon: false,
    variant: "primary",
    label: "Upload a file",
  },
};

export const Small = {
  args: {
    size: "small",
    onlyIcon: false,
    variant: "primary",
    label: "Upload a file",
  },
};

export const Large = {
  args: {
    size: "large",
    onlyIcon: false,
    variant: "primary",
    label: "Upload a file",
  },
};

export const OnlyIcon = {
  args: {
    size: "default",
    onlyIcon: true,
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    size: "default",
    onlyIcon: false,
    variant: "secondary",
    label: "Upload a file",
  },
};

export const OnlyIconSecondary = {
  args: {
    size: "default",
    onlyIcon: true,
    variant: "secondary",
  },
};
