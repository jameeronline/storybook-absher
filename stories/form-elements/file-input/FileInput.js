export function createFileUpload({
  size = "default", // Size: small, default, large
  onlyIcon = false, // onlyIcon: true/false
  variant = "primary", // Variant: primary, secondary
  label = "Upload a file", // Label: customizable text
}) {
  // Define size styles
  const sizeStyles = {
    small: "h-8 px-4 text-xs",
    default: "h-12 px-6 text-sm",
    large: "h-16 px-8 text-lg",
  };

  // Define variant styles
  const variantStyles = {
    primary:
      "bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 peer-disabled:bg-primary-300",
    secondary:
      "bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 peer-disabled:bg-secondary-300",
    danger:
      "bg-danger-500 hover:bg-danger-600 focus:bg-danger-700 peer-disabled:bg-danger-300",
    info: "bg-info-500 hover:bg-info-600 focus:bg-info-700 peer-disabled:bg-info-300",
    warning:
      "bg-warning-500 hover:bg-warning-600 focus:bg-warning-700 peer-disabled:bg-warning-300",
    success:
      "bg-success-500 hover:bg-success-600 focus:bg-success-700 peer-disabled:bg-success-300",
  };

  const iconSize = {
    small: "text-sm",
    default: "text-xl",
    large: "text-3xl",
  };

  // Define icon based on onlyIcon
  const iconHtml = `<i class="bi bi-upload ${iconSize[size]}"></i>`;

  // File input component
  const fileUploadHtml = `
      <div class="relative inline-flex items-center w-full gap-2 my-6 text-sm border rounded  border-slate-200 text-slate-500">
        <input id="file-upload" name="file-upload" type="file" class="peer order-2 [&::file-selector-button]:hidden" />
        <label for="file-upload"
          class="inline-flex items-center justify-center ${sizeStyles[size]} ${variantStyles[variant]} gap-3 text-white font-medium tracking-wide transition duration-300 rounded rounded-e-none cursor-pointer whitespace-nowrap focus-visible:outline-none peer-disabled:cursor-not-allowed ">
          ${onlyIcon ? iconHtml : `<span class="order-2">${label}</span>`}
          ${onlyIcon ? "" : `<span class="relative">${iconHtml}</span>`}
        </label>
      </div>
    `;

  return fileUploadHtml;
}
