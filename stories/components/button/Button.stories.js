import { background } from "@storybook/theming";
import { createButton } from "./Button"; // Import the render function

export default {
  title: "Components / Buttons",
  tags: ["autodocs"],
  render: createButton, // Use the imported render function
  parameters: {
    docs: {
      description: {
        component:
          "The button component is a versatile UI element that supports multiple types, sizes, and configurations. It can be rendered as a button, link, or input and allows for customization with icons, labels, full-width styles, and more.",
      },
    },
    backgrounds: {
      default: "light", // Default background color
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["button", "input", "a"],
      defaultValue: "button",
      description: "Select the type of element.",
    },
    href: {
      control: "text",
      defaultValue: "Button",
      description: "The URL if the button is rendered as a link.",
      if: { arg: "as", eq: "a" },
    },
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
      ],
      defaultValue: "primary",
      description:
        "The style type of the button, which determines its color and background.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge"],
      defaultValue: "large",
      description:
        "The size of the button (affects height, padding, and font).",
    },
    link: {
      control: "boolean",
      defaultValue: false,
      description: "change the look of the button like link",
    },
    rounded: {
      control: "boolean",
      defaultValue: false,
      description:
        "Fully rounded corners (rounded-full) or standard rounded corners.",
    },
    outline: {
      control: "boolean",
      defaultValue: false,
      description:
        "If true, the button will have an outline style with a transparent background.",
    },
    icon: {
      control: "boolean",
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
      if: { arg: "icon", truthy: true },
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      defaultValue: "left",
      description:
        "Position of the icon relative to the button label (left or right).",
      if: { arg: "icon", truthy: true },
    },
    iconOnly: {
      control: "boolean",
      defaultValue: false,
      description:
        "If true, the button will display only an icon with no text label.",
      if: { arg: "icon", truthy: true },
    },
    fullwidth: {
      control: "boolean",
      defaultValue: false,
      description:
        "If true, the button will take up the full width of its container.",
    },
  },
  args: {
    as: "button",
    href: undefined,
    label: "Button",
    type: "primary",
    size: "medium",
    outline: false,
    rounded: false,
    link: false,
    icon: false,
    iconName: "bi-star",
    iconPosition: "left",
    iconOnly: false,
    fullwidth: false,
  },
};

// Button Variants
export const PrimaryButtonLarge = {
  args: {
    type: "primary",
    size: "large",
  },
  parameters: {
    docs: {
      description: {
        story: "A large primary button for prominent actions.",
      },
    },
  },
};

export const PrimaryButtonMedium = {
  args: {
    type: "primary",
    size: "medium",
  },
};

export const PrimaryButtonSmall = {
  args: {
    type: "primary",
    size: "small",
  },
};

export const SecondaryButtonLarge = {
  args: {
    type: "secondary",
    size: "large",
  },
};

// export const SecondaryButtonMedium = {
//   args: {
//     type: "secondary",
//     size: "medium",
//   },
// };

// export const SecondaryButtonSmall = {
//   args: {
//     type: "secondary",
//     size: "small",
//   },
// };

export const TertiaryButtonLarge = {
  args: {
    type: "tertiary",
    size: "large",
  },
};

// export const TertiaryButtonMedium = {
//   args: {
//     type: "tertiary",
//     size: "medium",
//   },
// };

// export const TertiaryButtonSmall = {
//   args: {
//     type: "tertiary",
//     size: "small",
//   },
// };

export const DangerButtonLarge = {
  args: {
    type: "danger",
    size: "large",
  },
};

// export const DangerButtonMedium = {
//   args: {
//     type: "danger",
//     size: "medium",
//   },
// };

// export const DangerButtonSmall = {
//   args: {
//     type: "danger",
//     size: "small",
//   },
// };

export const SuccessButtonLarge = {
  args: {
    type: "success",
    size: "large",
  },
};

// export const SuccessButtonMedium = {
//   args: {
//     type: "success",
//     size: "medium",
//   },
// };

// export const SuccessButtonSmall = {
//   args: {
//     type: "success",
//     size: "small",
//   },
// };

export const InfoButtonLarge = {
  args: {
    type: "info",
    size: "large",
  },
};

// export const InfoButtonMedium = {
//   args: {
//     type: "info",
//     size: "medium",
//   },
// };

// export const InfoButtonSmall = {
//   args: {
//     type: "info",
//     size: "small",
//   },
// };

export const WarningButtonLarge = {
  args: {
    type: "warning",
    size: "large",
  },
};

// export const WarningButtonMedium = {
//   args: {
//     type: "warning",
//     size: "medium",
//   },
// };

// export const WarningButtonSmall = {
//   args: {
//     type: "warning",
//     size: "small",
//   },
// };

export const LightButtonLarge = {
  args: {
    type: "light",
    size: "large",
  },
};

// export const LightButtonMedium = {
//   args: {
//     type: "light",
//     size: "medium",
//   },
// };

// export const LightButtonSmall = {
//   args: {
//     type: "light",
//     size: "small",
//   },
// };

export const DarkButtonLarge = {
  args: {
    type: "dark",
    size: "large",
  },
};

// export const DarkButtonMedium = {
//   args: {
//     type: "dark",
//     size: "medium",
//   },
// };

// export const DarkButtonSmall = {
//   args: {
//     type: "dark",
//     size: "small",
//   },
// };

export const LinkButtonLarge = {
  args: {
    size: "large",
    link: true,
  },
};

// export const LinkButtonMedium = {
//   args: {
//     size: "medium",
//     link: true,
//   },
// };

// export const LinkButtonSmall = {
//   args: {
//     size: "small",
//     link: true,
//   },
// };

export const FullwidthPrimaryButton = {
  args: {
    type: "primary",
    size: "large",
    fullwidth: true,
  },
};

export const FullwidthDangerButton = {
  args: {
    type: "danger",
    size: "large",
    fullwidth: true,
  },
};

export const IconOnlySuccessButton = {
  args: {
    type: "success",
    size: "large",
    icon: true,
    iconOnly: true,
    iconName: "bi-heart",
  },
};

export const OutlineWarningButton = {
  args: {
    type: "warning",
    size: "large",
    outline: true,
  },
};

export const RoundedLightButton = {
  args: {
    type: "light",
    size: "large",
    rounded: true,
  },
};
