import { tv } from "tailwind-variants";

export const createButton = ({
  label = "Button", // Default label for the button
  type = "primary", // Default type (primary button)
  size = "medium", // Default size is medium
  rounded = false, // Default is not rounded
  outline = false, // Default is not outlined
  link = false,
  icon = false, // Default no icon
  iconName = "", // Default icon name is empty (no icon)
  iconPosition = "left", // Default icon position is left
  iconOnly = false, // Default is not icon-only
  fullwidth = false, // Default is not full-width
  as = "button", // Default element type is button
  href = "#", // Default href for anchor tag
}) => {
  const buttonClasses = tv({
    base: `inline-flex items-center justify-center gap-2 font-medium tracking-wide transition duration-300 focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none`,
    variants: {
      type: {
        primary:
          "bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 text-white",
        secondary: `bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 text-white`,
        tertiary:
          "bg-tertiary-500 hover:bg-tertiary-600 focus:bg-tertiary-700 text-white",
        danger:
          "bg-danger-600 hover:bg-danger-700 focus:bg-danger-800 text-white",
        success:
          "bg-success-600 hover:bg-success-700 focus:bg-success-800 text-white",
        info: "bg-info-600 hover:bg-info-700 focus:bg-info-800 text-white",
        warning:
          "bg-warning-500 hover:bg-warning-600 focus:bg-warning-700 text-white",
        light: "bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 text-gray-700",
        dark: "bg-gray-800 hover:bg-gray-900 focus:bg-black text-white",
      },
      size: {
        large: "h-12 px-8 text-md",
        medium: "h-10 px-4 text-sm",
        small: "h-8 px-3 text-xs",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded",
      },
      iconOnly: {
        true: "p-0 w-12",
      },
      fullwidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        type: "primary",
        outline: true,
        class:
          "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
      },
      {
        type: "secondary",
        outline: true,
        class:
          "bg-transparent border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white",
      },
      {
        type: "tertiary",
        outline: true,
        class:
          "bg-transparent border-2 border-tertiary-500 text-tertiary-500 hover:bg-tertiary-500 hover:text-white",
      },
      {
        type: "danger",
        outline: true,
        class:
          "bg-transparent border-2 border-danger-500 text-danger-500 hover:bg-danger-500 hover:text-white",
      },
      {
        type: "success",
        outline: true,
        class:
          "bg-transparent border-2 border-success-500 text-success-500 hover:bg-success-500 hover:text-white",
      },
      {
        type: "info",
        outline: true,
        class:
          "bg-transparent border-2 border-info-500 text-info-500 hover:bg-info-500 hover:text-white",
      },
      {
        type: "warning",
        outline: true,
        class:
          "bg-transparent border-2 border-warning-500 text-warning-500 hover:bg-warning-500 hover:text-white",
      },
      {
        type: "light",
        outline: true,
        class:
          "bg-transparent border-2 border-gray-200 text-gray-500 hover:bg-gray-300 hover:text-white",
      },
      {
        type: "dark",
        outline: true,
        class:
          "bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white",
      },
      {
        type: "primary",
        link: true,
        class:
          "bg-transparent hover:bg-primary-100 text-primary-500 hover:text-primary-700 underline",
      },
      {
        type: "secondary",
        link: true,
        class:
          "bg-transparent hover:bg-secondary-100 text-secondary-500 hover:text-secondary-700 underline",
      },
      {
        type: "tertiary",
        link: true,
        class:
          "bg-transparent hover:bg-tertiary-100 text-tertiary-500 hover:text-tertiary-700 underline",
      },
      {
        type: "danger",
        link: true,
        class:
          "bg-transparent hover:bg-danger-100 text-danger-500 hover:text-danger-700 underline",
      },
      {
        type: "success",
        link: true,
        class:
          "bg-transparent hover:bg-success-100 text-success-500 hover:text-success-700 underline",
      },
      {
        type: "info",
        link: true,
        class:
          "bg-transparent hover:bg-info-100 text-info-500 hover:text-info-700 underline",
      },
      {
        type: "warning",
        link: true,
        class:
          "bg-transparent hover:bg-warning-100 text-warning-500 hover:text-warning-700 underline",
      },
      {
        type: "light",
        link: true,
        class:
          "bg-transparent hover:bg-light-100 text-light-500 hover:text-light-700 underline",
      },
      {
        type: "dark",
        link: true,
        class:
          "bg-transparent hover:bg-dark-100 text-dark-500 hover:text-dark-700 underline",
      },
    ],
  });

  const content = `
    ${icon && iconPosition === "left" && !iconOnly ? `<i class="bi ${iconName} text-2xl"></i>` : ""}
    ${!iconOnly ? `<span>${label}</span>` : ""}
    ${iconOnly ? `<i class="bi ${iconName} text-2xl"></i>` : ""}
    ${icon && iconPosition === "right" && !iconOnly ? `<i class="bi ${iconName} text-2xl"></i>` : ""}
  `;

  const buttonClassNames = buttonClasses({
    type: type,
    size: size,
    rounded: rounded,
    link: link,
    iconOnly: iconOnly,
    outline: outline,
    fullwidth: fullwidth,
  });

  if (as === "button") {
    return `
      <button class="${buttonClassNames}">
        ${content}
      </button>
    `;
  } else if (as === "input") {
    return `
      <input type="button" value="${label}" class="${buttonClassNames}" />
    `;
  } else if (as === "a") {
    return `
      <a href="${href}" class="${buttonClassNames}">
        ${content}
      </a>
    `;
  }
};
