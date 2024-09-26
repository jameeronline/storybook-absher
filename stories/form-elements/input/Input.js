export const createInput = ({
  as = "text",
  size = "default",
  isLabel = true,
  label = "Your Name",
  placeholder = false,
  placeholderText = null,
  helperText = true,
  helperLabel = "Text field with helper text",
  isLeadIcon = true,
  leadingIcon = null,
  isTrailIcon = false,
  trailingIcon = null,
}) => {
  // Determine size classes for the input
  const sizeClasses = {
    small: {
      inputHeight: "h-10",
      iconSize: "text-base", // Adjust icon size for small input
      textSize: "text-sm", // Small text for label/input/placeholder
      labelSize: "text-xs",
    },
    default: {
      inputHeight: "h-12",
      iconSize: "text-lg", // Default icon size
      textSize: "text-base", // Default text size for label/input/placeholder
      labelSize: "text-sm",
    },
    large: {
      inputHeight: "h-16",
      iconSize: "text-2xl", // Larger icon size
      textSize: "text-lg", // Larger text for label/input/placeholder
      labelSize: "text-base",
    },
  };

  const inputSizeClass = sizeClasses[size].inputHeight;
  const iconSizeClass = sizeClasses[size].iconSize;
  const textSizeClass = sizeClasses[size].textSize;
  const labelSizeClass = sizeClasses[size].labelSize;

  // Icons rendering with dynamic size
  const leadIconMarkup =
    isLeadIcon && leadingIcon
      ? `<span class="absolute w-6 h-6 cursor-pointer top-3 left-4 ${iconSizeClass} text-slate-400"><i class="bi bi-${leadingIcon}"></i></span>`
      : "";

  const trailIconMarkup =
    isTrailIcon && trailingIcon
      ? `<span class="absolute w-6 h-6 cursor-pointer top-3 right-4 ${iconSizeClass} text-slate-400"><i class="bi bi-${trailingIcon}"></i></span>`
      : "";

  // Label rendering with dynamic text size
  const labelMarkup = isLabel
    ? `
    <label for="input-field" class="cursor-text peer-focus:cursor-default z-[1] px-2 ${labelSizeClass} text-slate-600 transition-all peer-required:after:text-danger-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-danger-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary-500 peer-invalid:peer-focus:text-danger-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
      ${label}
    </label>`
    : "";

  // Helper text rendering
  const helperTextMarkup = helperText
    ? `
    <small class="flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-danger-500">
      <span>${helperLabel}</span>
    </small>`
    : "";

  return `
    ${labelMarkup}
    <div class="relative mt-1 mb-6">
      <input id="input-field" type="${as}" placeholder="${placeholderText}" class="relative w-full ${inputSizeClass} px-4 ${isLeadIcon ? "pl-12" : ""} ${isTrailIcon ? "pr-12" : ""} transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 ${textSizeClass} text-slate-500 autofill:bg-white invalid:border-danger-500 invalid:text-danger-500 focus:border-primary-500 focus:outline-none invalid:focus:border-danger-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
      ${leadIconMarkup}
      ${trailIconMarkup}
      ${helperTextMarkup}
    </div>
  `;
};
