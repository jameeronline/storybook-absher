// Function to create the toggle component
export const createToggleComponent = ({
  type = "primary",
  size = "base",
  content = [{ title: "Toggle", description: "", iconName: "" }],
  isIcon = false,
  helpText = false,
}) => {
  const sizeClass =
    size === "large"
      ? "w-12 h-6 after:w-6 after:h-6"
      : "w-8 h-4 after:w-4 after:h-4";

  const helpTextAlignment = size === "large" ? "pl-14" : "pl-10";
  const typeClass = {
    primary:
      "checked:bg-primary-200 checked:after:bg-primary-600 hover:bg-slate-400 checked:hover:bg-primary-400",
    secondary:
      "checked:bg-secondary-200 checked:after:bg-secondary-600 hover:bg-slate-400 checked:hover:bg-secondary-400",
    danger:
      "checked:bg-danger-200 checked:after:bg-danger-600 hover:bg-slate-400 checked:hover:bg-danger-400",
    info: "checked:bg-info-200 checked:after:bg-info-600 hover:bg-slate-400 checked:hover:bg-info-400",
    warning:
      "checked:bg-warning-200 checked:after:bg-warning-600 hover:bg-slate-400 checked:hover:bg-warning-400",
    success:
      "checked:bg-success-200 checked:after:bg-success-600 hover:bg-slate-400 checked:hover:bg-success-400",
  }[type];

  const iconMarkup = isIcon
    ? `<i class="bi bi-${content[0].iconName} text-xl text-slate-500"></i>`
    : "";

  const helpTextMarkup = helpText
    ? `<small class="w-full py-2 text-xs transition ${helpTextAlignment} text-slate-400 peer-invalid:text-danger-500">
        <span>${content[0].description || "Toggle can also have helper text"}</span>
      </small>`
    : "";

  return `
    <div class="relative flex flex-wrap items-center">
      <input
        class="relative ${sizeClass} transition-colors appearance-none cursor-pointer ${typeClass} peer rounded-xl bg-slate-300 after:absolute after:top-0 after:left-0 after:rounded-full after:bg-slate-500 after:transition-all ${size === "large" ? "checked:after:left-6" : "checked:after:left-4"} disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
        type="checkbox"
        id="toggle-${content[0].title}"
      />
      ${iconMarkup}
      <label class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" for="toggle-${content[0].title}">
        ${content[0].title}
      </label>
      ${helpTextMarkup}
    </div>
  `;
};
