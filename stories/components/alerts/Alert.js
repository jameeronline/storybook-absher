import clsx from "clsx";
import { createButton } from "../button/Button";

import { tv } from "tailwind-variants";

export const createAlert = ({
  type,
  title,
  message,
  leadingIcon,
  dismissIcon,
  actionButtons,
  primaryButtonLabel,
  linkButtonLabel,
}) => {
  const alertClassNames = tv({
    slots: {
      base: "flex flex-col w-full px-4 py-3 border rounded",
      contentWrapper: "flex gap-4 items-center",
      title_slot: "flex-1 font-semibold mb-1",
      message_slot: "text-md",
      leadingIcon_slot: "",
      dismissIcon_slot:
        "inline-flex items-center justify-center h-8 w-8 text-xs font-medium rounded-full",
      actionButtons_slot: "flex gap-2 mt-4",
    },
    variants: {
      type: {
        success: {
          base: "border-success-100 bg-success-50 text-success-500",
          dismissIcon_slot: "text-success-500 hover:bg-success-100",
        },
        danger: {
          base: "border-danger-100 bg-danger-50 text-danger-500",
          dismissIcon_slot: "text-danger-500 hover:bg-danger-100",
        },
        info: {
          base: "border-info-100 bg-info-50 text-info-500",
          dismissIcon_slot: "text-info-500 hover:bg-info-100",
        },
        warning: {
          base: "border-warning-100 bg-warning-50 text-warning-500",
          dismissIcon_slot: "text-warning-500 hover:bg-warning-100",
        },
      },
    },
    compoundVariants: [
      {
        leadingIcon: true,
        class: {
          base: "py-4",
          actionButtons_slot: "ps-10",
          contentWrapper: "items-center",
        },
      },
      {
        leadingIcon: false,
        class: {
          contentWrapper: "items-center h-10",
        },
      },
      {
        title: true,
        class: {
          contentWrapper: "items-start",
        },
      },
    ],
  });

  const leadingIconMakrup = {
    success: "bi-check-circle",
    danger: "bi-x-circle",
    info: "bi-info-circle",
    warning: "bi-exclamation-circle",
  };

  const {
    base,
    contentWrapper,
    title_slot,
    message_slot,
    leadingIcon_slot,
    dismissIcon_slot,
    actionButtons_slot,
  } = alertClassNames({
    type: type,
    title: title,
    message: message,
    leadingIcon: leadingIcon,
    dismissIcon: dismissIcon,
    actionButtons: actionButtons,
  });

  return `
    <div class="${base()}" role="alert">
      <div class="${contentWrapper()}">
        ${leadingIcon ? `<i class="bi ${leadingIconMakrup[type]} text-2xl"></i>` : ""}
        <div class="flex-1">
          ${title ? `<h3 class="${title_slot()}">${title}</h3>` : ""}
          ${message ? `<p class="${message_slot()}">${message}</p>` : ""}
        </div>  
        ${
          dismissIcon
            ? `
          <button aria-label="Close" class="${dismissIcon_slot()}">
            <i class="bi bi-x-lg text-xl"></i>
          </button>`
            : ""
        }
      </div>
      ${
        actionButtons
          ? `
        <div class="${actionButtons_slot()}">
          ${createButton({
            as: "button",
            label: primaryButtonLabel,
            type: type,
            size: "small",
          })}
          ${createButton({
            as: "a",
            label: linkButtonLabel,
            type: type,
            size: "small",
            link: true,
          })}
        </div>`
          : ""
      }
    </div>
  `;
};
