import clsx from "clsx";
import { createButton } from "../buttons/Button";
import { formatHtml } from "../../utilities/code-format";

export const createAlert = ({
  alertTitle,
  alertMessage,
  showLeadingIcon,
  leadingIcon,
  showDismissIcon,
  showActionButtons,
  type,
  primaryButtonLabel,
  linkButtonLabel,
}) => {
  const typeClasses = {
    success: "border-success-100 bg-success-50 text-success-500",
    danger: "border-danger-100 bg-danger-50 text-danger-500",
    info: "border-info-100 bg-info-50 text-info-500",
    warning: "border-warning-100 bg-warning-50 text-warning-500",
    dark: "border-gray-100 bg-gray-50 text-gray-500",
  };

  return formatHtml(`
    <div class="flex flex-col w-full text-sm px-4 py-3 border rounded ${typeClasses[type]}" role="alert">
      <div class="flex items-center gap-4 ${clsx(alertTitle && "mb-1")}">
        ${showLeadingIcon ? `<i class="bi bi-${leadingIcon} text-2xl"></i>` : ""}
        <div class="flex-1">
        ${alertTitle && `<h3 class="flex-1 font-semibold mb-2">${alertTitle}</h3>`}
        ${alertMessage && `<p class="text-sm">${alertMessage}</p>`}
        </div>  
        ${
          showDismissIcon
            ? `
          <button aria-label="Close" class="inline-flex items-center justify-center h-8 px-4 text-xs font-medium rounded-full text-${type}-500 hover:bg-${type}-100">
            <i class="bi bi-x-lg text-xl"></i>
          </button>`
            : ""
        }
      </div>
      ${
        showActionButtons
          ? `
        <div class="flex gap-2 mt-4 ${showLeadingIcon && "px-9"}">
          ${createButton({
            as: "button",
            label: primaryButtonLabel,
            type: type,
            size: "small",
          })}
          ${createButton({
            as: "a",
            label: linkButtonLabel,
            type: "link",
            size: "small",
          })}
        </div>`
          : ""
      }
    </div>
  `);
};
