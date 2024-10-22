export function createTooltip({
  variant = "primary",
  onlyIcon = false,
  position = "top",
  size = "default",
  label = "Hover me",
  tooltipText = "I'm a tooltip",
}) {
  // Define size styles
  const sizeStyles = {
    small: "w-32 p-2 text-xs",
    default: "w-48 p-4 text-sm",
    large: "w-64 p-6 text-md",
  };

  // Define variant styles
  const variantStyles = {
    primary: "bg-primary-700 text-white",
    secondary: "bg-secondary-600 text-white",
    tertiary: "bg-tertiary-600 text-white",
    danger: "bg-danger-500 text-white",
    info: "bg-info-500 text-white",
    warning: "bg-warning-500 text-white",
    success: "bg-success-500 text-white",
    dark: "bg-gray-600 text-white",
  };

  // Define position styles
  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  // Define arrow position and variant-specific border colors manually
  const arrowPositionBorderStyles = {
    primary: {
      top: "before:border-t-primary-700",
      right: "before:border-r-primary-700",
      bottom: "before:border-b-primary-700",
      left: "before:border-l-primary-700",
    },
    secondary: {
      top: "before:border-t-secondary-600",
      right: "before:border-r-secondary-600",
      bottom: "before:border-b-secondary-600",
      left: "before:border-l-secondary-600",
    },
    tertiary: {
      top: "before:border-t-tertiary-600",
      right: "before:border-r-tertiary-600",
      bottom: "before:border-b-tertiary-600",
      left: "before:border-l-tertiary-600",
    },
    danger: {
      top: "before:border-t-danger-500",
      right: "before:border-r-danger-500",
      bottom: "before:border-b-danger-500",
      left: "before:border-l-danger-500",
    },
    info: {
      top: "before:border-t-info-500",
      right: "before:border-r-info-500",
      bottom: "before:border-b-info-500",
      left: "before:border-l-info-500",
    },
    warning: {
      top: "before:border-t-warning-500",
      right: "before:border-r-warning-500",
      bottom: "before:border-b-warning-500",
      left: "before:border-l-warning-500",
    },
    success: {
      top: "before:border-t-success-500",
      right: "before:border-r-success-500",
      bottom: "before:border-b-success-500",
      left: "before:border-l-success-500",
    },
    dark: {
      top: "before:border-t-gray-600",
      right: "before:border-r-gray-600",
      bottom: "before:border-b-gray-600",
      left: "before:border-l-gray-600",
    },
  };

  const arrowPositionStyles = {
    top: `before:left-1/2 before:top-full before:z-10 before:mb-2 before:-ml-2 before:border-x-8 before:border-t-8 before:border-x-transparent ${arrowPositionBorderStyles[variant][position]}`,
    right: `before:top-1/2 before:right-full before:z-10 before:ml-2 before:-mt-2 before:border-y-8 before:border-r-8 before:border-y-transparent ${arrowPositionBorderStyles[variant][position]}`,
    bottom: `before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent ${arrowPositionBorderStyles[variant][position]}`,
    left: `before:top-1/2 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent ${arrowPositionBorderStyles[variant][position]}`,
  };

  // Tooltip element
  const tooltip = `
        <span class="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none" aria-describedby="tooltip-01">
            ${onlyIcon ? '<i class="bi bi-info-circle"></i>' : label}
            <span role="tooltip" id="tooltip-01"
                class="invisible absolute ${positionStyles[position]} z-10 ${sizeStyles[size]} rounded ${variantStyles[variant]} opacity-0 transition-all
                before:invisible before:absolute before:z-10 ${arrowPositionStyles[position]}
                before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">
                ${tooltipText}
            </span>
        </span>
    `;

  return tooltip;
}
