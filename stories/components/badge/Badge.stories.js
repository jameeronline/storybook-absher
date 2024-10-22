// Badge Component for Wind UI
// This component is used to display badges with various styles, colors, and configurations.
// It supports different types (e.g., primary, secondary, etc.), can be fully rounded or not,
// and can be displayed with or without an icon.

import { createBadge } from "./Badge";

export default {
  title: "Components / Badge",
  tags: ["autodocs"],
  render: createBadge,
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Badge",
      description: "The text label to be displayed inside the badge.",
    },
    type: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "danger",
        "success",
        "info",
        "warning",
        "light",
        "dark",
      ],
      defaultValue: "primary",
      description: "The type of badge to display, which determines its color.",
    },
    rounded: {
      control: { type: "boolean" },
      defaultValue: true,
      description:
        "Determines if the badge should be fully rounded or have standard rounded corners.",
    },
    iconOnly: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "If true, the badge will only display an icon instead of text.",
    },
  },
  args: {
    label: "Badge",
    type: "primary",
    rounded: true,
    iconOnly: false,
  },
};

// Example usage of the badge component with primary type
// Primary Badge with Text
export const Primary = {
  args: {
    type: "primary",
    rounded: true,
    iconOnly: false,
  },
};

// Secondary Badge, Rounded
export const SecondaryRounded = {
  args: {
    type: "secondary",
    rounded: true,
    iconOnly: false,
  },
};

// Danger Badge, Not Rounded
export const DangerNotRounded = {
  args: {
    type: "danger",
    rounded: false,
    iconOnly: false,
  },
};

// Success Badge, Icon Only
export const SuccessIconOnly = {
  args: {
    type: "success",
    rounded: true,
    iconOnly: true,
  },
};

// Info Badge, Not Rounded, Icon Only
export const InfoNotRoundedIconOnly = {
  args: {
    type: "info",
    rounded: false,
    iconOnly: true,
  },
};

// Warning Badge, Rounded, Icon Only
export const WarningRoundedIconOnly = {
  args: {
    type: "warning",
    rounded: true,
    iconOnly: true,
  },
};

// Light Badge with Text
export const Light = {
  args: {
    type: "light",
    rounded: true,
    iconOnly: false,
  },
};

// Dark Badge, Not Rounded
export const DarkNotRounded = {
  args: {
    type: "dark",
    rounded: false,
    iconOnly: false,
  },
};
