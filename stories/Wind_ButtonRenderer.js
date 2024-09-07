export const buttonRenderer = ({
  label,
  type,
  size,
  rounded,
  outline,
  icon,
  iconName,
  iconPosition,
  iconOnly,
  fullwidth,
}) => {
  const typeClasses = {
    primary: outline
      ? "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
      : "bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 text-white",
    secondary: outline
      ? "bg-transparent border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white"
      : "bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 text-white",
    tertiary: outline
      ? "bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
      : "bg-red-500 hover:bg-red-600 focus:bg-red-700 text-white",
    danger: outline
      ? "bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
      : "bg-red-600 hover:bg-red-700 focus:bg-red-800 text-white",
    success: outline
      ? "bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
      : "bg-green-600 hover:bg-green-700 focus:bg-green-800 text-white",
    info: outline
      ? "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
      : "bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 text-white",
    warning: outline
      ? "bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
      : "bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-700 text-white",
    light: outline
      ? "bg-transparent border-2 border-gray-200 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
      : "bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 text-gray-700",
    dark: outline
      ? "bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
      : "bg-gray-800 hover:bg-gray-900 focus:bg-black text-white",
    link: "text-primary-500 hover:text-primary-700 underline",
  };

  const sizeClasses = {
    large: "h-12 px-6 text-sm",
    medium: "h-10 px-4 text-sm",
    small: "h-8 px-3 text-xs",
  };

  const roundedClass = rounded ? "rounded-full" : "rounded";
  const iconOnlyClass = iconOnly ? "p-0 w-12" : "";
  const fullwidthClass = fullwidth ? "w-full" : "";

  return `
      <button class="inline-flex items-center justify-center ${sizeClasses[size]} gap-2 font-medium tracking-wide transition duration-300 ${roundedClass} focus-visible:outline-none whitespace-nowrap ${typeClasses[type]} ${iconOnlyClass} ${fullwidthClass} disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none">
        ${icon && iconPosition === "left" && !iconOnly ? `<i class="bi ${iconName} text-2xl"></i>` : ""}
        ${!iconOnly ? `<span>${label}</span>` : ""}
        ${iconOnly ? `<i class="bi ${iconName} text-2xl"></i>` : ""}
        ${icon && iconPosition === "right" && !iconOnly ? `<i class="bi ${iconName} text-2xl"></i> ` : ""}
      </button>
    `;
};
