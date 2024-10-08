import { createToggleComponent } from "./Toggle";

// Stories configuration
export default {
  title: "Form Elements / Toggle",
  tags: ["autodocs"],
  render: createToggleComponent,
  parameters: {
    docs: {
      description: {
        component:
          "The Toggle component can display different types of switches with optional icons and help text.",
      },
    },
  },
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "danger", "info", "warning", "success"],
      description: "Specifies the type/color of the toggle switch",
      defaultValue: "primary",
    },
    size: {
      control: { type: "select" },
      options: ["base", "large"],
      description: "Specifies the size of the toggle switch",
      defaultValue: "base",
    },
    content: {
      control: "object",
      description:
        "Content for the toggle switch, including title, description, and iconName",
    },
    isIcon: {
      control: "boolean",
      description:
        "Specifies whether an icon should be displayed next to the toggle switch",
      defaultValue: false,
    },
    helpText: {
      control: "boolean",
      description:
        "Specifies whether help text should be displayed below the toggle switch",
      defaultValue: false,
    },
  },
  args: {
    type: "primary",
    size: "base",
    content: [
      {
        title: "Primary",
        description: "This is a primary toggle",
        iconName: "",
      },
    ],
    isIcon: false,
    helpText: false,
  },
};

// Story variations
export const PrimaryToggleWithHelpText = {
  args: {
    type: "primary",
    size: "base",
    content: [
      {
        title: "Primary",
        description: "Helper text for primary toggle",
        iconName: "",
      },
    ],
    isIcon: false,
    helpText: false,
  },
};

export const LargeSecondaryToggleWithIcon = {
  args: {
    type: "secondary",
    size: "large",
    content: [
      { title: "Secondary", description: "", iconName: "check-circle" },
    ],
    isIcon: true,
    helpText: false,
  },
};

export const DangerToggleWithoutIcon = {
  args: {
    type: "danger",
    size: "base",
    content: [
      { title: "Danger", description: "Use with caution", iconName: "" },
    ],
    isIcon: false,
    helpText: true,
  },
};
