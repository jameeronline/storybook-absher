import clsx from "clsx";

export default {
  title: "Components/Spinner",
  tags: ["autodocs"],
  render: ({ size, type, variant }) => {
    const sizeClasses = {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-10 h-10",
      xlarge: "w-12 h-12",
    };

    const variantColors = {
      primary: "stroke-primary-500",
      secondary: "stroke-secondary-500",
      danger: "stroke-danger-500",
      success: "stroke-success-500",
      info: "stroke-info-500",
      warning: "stroke-warning-500",
    };

    return `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title-04a desc-04a" aria-live="polite" aria-busy="true"
        class="${clsx(sizeClasses[size], "animate-spin")}">
        <title id="title-04a">Loading</title>
        <desc id="desc-04a">Loading spinner</desc>
        ${
          type === "circle"
            ? `<circle cx="12" cy="12" r="10" class="stroke-slate-200" stroke-width="4" />
               <path d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2" class="${variantColors[variant]}" stroke-width="4" />`
            : `<rect x="2" y="2" width="20" height="20" rx="5" class="stroke-slate-200" stroke-width="4" />
               <path d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2" class="${variantColors[variant]}" stroke-width="4" />`
        }
      </svg>
    `;
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge"],
      description: "Size of the spinner",
      defaultValue: "medium",
    },
    type: {
      control: { type: "select" },
      options: ["circle", "square"],
      description: "Shape of the spinner",
      defaultValue: "circle",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "success", "info", "warning"],
      description: "Color variant of the spinner",
      defaultValue: "primary",
    },
  },
  args: {
    size: "medium",
    type: "circle",
    variant: "primary",
  },
};

// Stories for different variants

export const CircleSpinnerSmallPrimary = {
  args: {
    size: "small",
    type: "circle",
    variant: "primary",
  },
  title: "Small Circle Spinner - Primary",
};

export const CircleSpinnerMediumSuccess = {
  args: {
    size: "medium",
    type: "circle",
    variant: "success",
  },
  title: "Medium Circle Spinner - Success",
};

export const CircleSpinnerLargeDanger = {
  args: {
    size: "large",
    type: "circle",
    variant: "danger",
  },
  title: "Large Circle Spinner - Danger",
};

export const CircleSpinnerXLInfo = {
  args: {
    size: "xlarge",
    type: "circle",
    variant: "info",
  },
  title: "XL Circle Spinner - Info",
};

export const SquareSpinnerSmallSecondary = {
  args: {
    size: "small",
    type: "square",
    variant: "secondary",
  },
  title: "Small Square Spinner - Secondary",
};

export const SquareSpinnerMediumWarning = {
  args: {
    size: "medium",
    type: "square",
    variant: "warning",
  },
  title: "Medium Square Spinner - Warning",
};

export const SquareSpinnerLargeSuccess = {
  args: {
    size: "large",
    type: "square",
    variant: "success",
  },
  title: "Large Square Spinner - Success",
};

export const SquareSpinnerXLPrimary = {
  args: {
    size: "xlarge",
    type: "square",
    variant: "primary",
  },
  title: "XL Square Spinner - Primary",
};
