import { buttonRenderer } from "./Wind_ButtonRenderer"; // Import the render function

export default {
  title: "Wind UI / Buttons",
  tags: ["autodocs"],
  render: buttonRenderer, // Use the imported render function
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Button",
      description: "The text label displayed inside the button.",
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
        "link",
      ],
      defaultValue: "primary",
      description:
        "The style type of the button, which determines its color and background.",
    },
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small"],
      defaultValue: "large",
      description:
        "The size of the button, affecting its height, padding, and font size.",
    },
    rounded: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "Determines if the button should have fully rounded corners (rounded-full) or standard rounded corners.",
    },
    outline: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "If true, the button will have an outline style with a transparent background.",
    },
    icon: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "If true, an icon will be displayed inside the button.",
    },
    iconName: {
      control: { type: "select" },
      options: [
        "bi-alarm",
        "bi-bag",
        "bi-bell",
        "bi-book",
        "bi-camera",
        "bi-cloud",
        "bi-gear",
        "bi-heart",
        "bi-house",
        "bi-star",
      ],
      defaultValue: "bi-star",
      description:
        "The name of the Bootstrap icon to be displayed inside the button.",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      defaultValue: "left",
      description:
        "Determines the position of the icon relative to the button label (left or right).",
    },
    iconOnly: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "If true, the button will display only an icon with no text label.",
    },
    fullwidth: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "If true, the button will take up the full width of its container.",
    },
  },
  args: {
    label: "Button",
    type: "primary",
    size: "large",
    rounded: false,
    outline: false,
    icon: false,
    iconName: "bi-star",
    iconPosition: "left",
    iconOnly: false,
    fullwidth: false,
  },
};

// Button Variants
export const PrimaryLarge = {
  args: {
    type: "primary",
    size: "large",
  },
};

export const PrimaryMedium = {
  args: {
    type: "primary",
    size: "medium",
  },
};

export const PrimarySmall = {
  args: {
    type: "primary",
    size: "small",
  },
};

export const SecondaryLarge = {
  args: {
    type: "secondary",
    size: "large",
  },
};

export const SecondaryMedium = {
  args: {
    type: "secondary",
    size: "medium",
  },
};

export const SecondarySmall = {
  args: {
    type: "secondary",
    size: "small",
  },
};

export const TertiaryLarge = {
  args: {
    type: "tertiary",
    size: "large",
  },
};

export const TertiaryMedium = {
  args: {
    type: "tertiary",
    size: "medium",
  },
};

export const TertiarySmall = {
  args: {
    type: "tertiary",
    size: "small",
  },
};

export const DangerLarge = {
  args: {
    type: "danger",
    size: "large",
  },
};

export const DangerMedium = {
  args: {
    type: "danger",
    size: "medium",
  },
};

export const DangerSmall = {
  args: {
    type: "danger",
    size: "small",
  },
};

export const SuccessLarge = {
  args: {
    type: "success",
    size: "large",
  },
};

export const SuccessMedium = {
  args: {
    type: "success",
    size: "medium",
  },
};

export const SuccessSmall = {
  args: {
    type: "success",
    size: "small",
  },
};

export const InfoLarge = {
  args: {
    type: "info",
    size: "large",
  },
};

export const InfoMedium = {
  args: {
    type: "info",
    size: "medium",
  },
};

export const InfoSmall = {
  args: {
    type: "info",
    size: "small",
  },
};

export const WarningLarge = {
  args: {
    type: "warning",
    size: "large",
  },
};

export const WarningMedium = {
  args: {
    type: "warning",
    size: "medium",
  },
};

export const WarningSmall = {
  args: {
    type: "warning",
    size: "small",
  },
};

export const LightLarge = {
  args: {
    type: "light",
    size: "large",
  },
};

export const LightMedium = {
  args: {
    type: "light",
    size: "medium",
  },
};

export const LightSmall = {
  args: {
    type: "light",
    size: "small",
  },
};

export const DarkLarge = {
  args: {
    type: "dark",
    size: "large",
  },
};

export const DarkMedium = {
  args: {
    type: "dark",
    size: "medium",
  },
};

export const DarkSmall = {
  args: {
    type: "dark",
    size: "small",
  },
};

export const LinkLarge = {
  args: {
    type: "link",
    size: "large",
  },
};

export const LinkMedium = {
  args: {
    type: "link",
    size: "medium",
  },
};

export const LinkSmall = {
  args: {
    type: "link",
    size: "small",
  },
};

export const PrimaryFullwidth = {
  args: {
    type: "primary",
    size: "large",
    fullwidth: true,
  },
};

export const DangerFullwidth = {
  args: {
    type: "danger",
    size: "large",
    fullwidth: true,
  },
};

export const SuccessIconOnly = {
  args: {
    type: "success",
    size: "large",
    icon: true,
    iconOnly: true,
    iconName: "bi-heart",
  },
};

export const WarningOutline = {
  args: {
    type: "warning",
    size: "large",
    outline: true,
  },
};

export const LightRounded = {
  args: {
    type: "light",
    size: "large",
    rounded: true,
  },
};
