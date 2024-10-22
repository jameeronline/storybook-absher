import { createButtonSwitchComponent } from "./ButtonSwitch";

export default {
  title: "Form Elements/Button Switch",
  tags: ["autodocs"],
  render: (args) => {
    // Generate a unique ID for the toggle component
    const elementId = `toggle-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    // Create the toggle component with updated arguments
    const toggleMarkup = createButtonSwitchComponent({ ...args, elementId });
    return toggleMarkup;
  },
  argTypes: {
    labels: {
      control: "array",
      description: "Labels for the two toggle states.",
      defaultValue: [
        { label: "Code mode", icon: "bi-code-slash" },
        { label: "Visual mode", icon: "bi-eye" },
      ],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge"],
      defaultValue: "large",
      description:
        "The size of the button (affects height, padding, and font).",
    },
    leadingIcon: {
      control: "boolean",
      description: "Adds an icon at the start of the label.",
      defaultValue: false,
    },
    trailIcon: {
      control: "boolean",
      description: "Adds an icon at the end of the label.",
      defaultValue: false,
    },
    rounded: {
      control: "boolean",
      description: "Controls whether the buttons have rounded corners.",
      defaultValue: true,
    },
  },
  args: {
    labels: [
      { label: "Code mode", icon: "bi-code-slash" },
      { label: "Visual mode", icon: "bi-eye" },
    ],
    size: "medium",
    leadingIcon: false,
    trailIcon: false,
    rounded: true,
  },
};

export const DefaultToggle = {
  args: {},
};

export const ToggleWithIcon = {
  args: {
    trailIcon: true,
  },
};

export const ToggleWithRoundedCorners = {
  args: {
    rounded: true,
    trailIcon: true,
  },
};

export const LeadingWithIcon = {
  args: {
    rounded: false,
    leadingIcon: true,
  },
};

export const LeadingWithRoundedCorners = {
  args: {
    rounded: true,
    leadingIcon: true,
  },
};

export const ToggleWithCustomLabels = {
  args: {
    labels: [
      { label: "Editor", icon: "bi-code-slash" },
      { label: "Preview", icon: "bi-eye" },
    ],
  },
};
