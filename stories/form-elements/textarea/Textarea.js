//format
import { formatHtml } from "../../utilities/code-format";

// createTextarea.js
export function createTextarea({
  size = "default",
  helpText = false,
  disabled = false,
  isError = false,
  label = "Write your message",
  placeholderText = "Write your message",
  isTextCounter = false,
}) {
  const sizeClass = size === "large" ? "p-4" : "p-2";
  const errorClass = isError
    ? "border-danger-500 text-danger-500 focus:border-danger-500"
    : "border-typo-200 text-typo-500 focus:border-primary-500";
  const disabledClass = disabled
    ? "disabled:bg-typo-50 disabled:text-typo-400 disabled:cursor-not-allowed"
    : "";
  const textCounter = isTextCounter
    ? `<span class="text-typo-500"> 1/10 </span>`
    : "";
  const helpTextContent = helpText
    ? `<small class="flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-danger-500"><span>Help text goes here</span>${textCounter}</small>`
    : "";

  return formatHtml(`
    <div class="relative has-invalid:text-danger-500">
      <label for="textarea-${size}" class="cursor-text peer-focus:cursor-default px-2 text-typo-600 text-sm transition-all peer-required:after:text-danger-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-danger-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary-500 peer-invalid:peer-focus:text-danger-500 peer-disabled:cursor-not-allowed peer-disabled:text-typo-400 peer-disabled:before:bg-transparent">
        ${label}
      </label>
      <textarea id="textarea-${size}" rows="4" placeholder="${placeholderText}" ${disabled ? "disabled" : ""} class="mt-1 relative w-full ${sizeClass} transition-all border rounded outline-none focus-visible:outline-none ${errorClass} ${disabledClass} autofill:bg-white invalid:border-danger-500 invalid:text-danger-500"></textarea>
      ${helpTextContent}
    </div>
  `);
}
