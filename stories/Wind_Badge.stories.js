// Badge Component for Wind UI
// This component is used to display badges with various styles, colors, and configurations.
// It supports different types (e.g., primary, secondary, etc.), can be fully rounded or not,
// and can be displayed with or without an icon.

export default {
  title: "Wind UI / Badge",
  tags: ["autodocs"],
  render: ({ label, type, rounded, iconOnly }) => {
    // Define type-specific classes for different badge types
    const typeClasses = {
      primary: "bg-primary-200 text-primary-800",
      secondary: "bg-secondary-200 text-secondary-800",
      tertiary: "bg-tertiary-200 text-tertiary-800",
      danger: "bg-danger-200 text-danger-800",
      success: "bg-success-200 text-success-800",
      info: "bg-info-200 text-info-800",
      warning: "bg-warning-200 text-warning-800",
      light: "bg-gray-100 text-gray-800",
      dark: "bg-gray-800 text-white",
    };

    // Define classes based on rounded and iconOnly options
    const roundedClass = rounded ? "rounded-full" : "rounded";
    const iconOnlyClass = iconOnly ? "p-0 w-8 h-8" : "px-4 py-2";

    return `
<span class="font-sans text-xs ${roundedClass} ${typeClasses[type]} ${iconOnlyClass} inline-flex items-center justify-center">
    ${iconOnly ? '<i class="bi bi-star-fill"></i>' : label}
</span>
      `;
  },
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
