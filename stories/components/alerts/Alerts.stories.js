import { createAlert } from "./Alert";

export default {
  title: "Components/Alerts",
  tags: ["autodocs"],
  render: createAlert,
  argTypes: {
    type: {
      control: "select",
      options: ["danger", "success", "info", "warning", "dark"],
      description: "Type of alert",
      defaultValue: "success",
    },
    alertTitle: {
      control: "text",
      description: "Title of the alert",
      defaultValue: "Alert Title",
    },
    alertMessage: {
      control: "text",
      description: "Main content of the alert",
      defaultValue:
        "You successfully read this important alert message. Green often indicates something successful or positive.",
    },
    showLeadingIcon: {
      control: "boolean",
      description: "Display the leading icon",
      defaultValue: false,
    },
    leadingIcon: {
      control: "select",
      options: [
        "x-circle",
        "check-circle",
        "info-circle",
        "exclamation-circle",
      ],
      description: "Icon of the alert",
      defaultValue: "x-circle",
      if: { arg: "showLeadingIcon", truthy: true }, // Only show if leading icon is true
    },
    showDismissIcon: {
      control: "boolean",
      description: "Display the dismiss icon",
      defaultValue: false,
    },
    showActionButtons: {
      control: "boolean",
      description: "Display action buttons",
      defaultValue: false,
    },
    primaryButtonLabel: {
      control: "text",
      description: "Label for the primary action button",
      defaultValue: "Proceed",
      if: { arg: "showActionButtons", truthy: true }, // Only show if action buttons are true
    },
    linkButtonLabel: {
      control: "text",
      description: "Label for the link action button",
      defaultValue: "Cancel",
      if: { arg: "showActionButtons", truthy: true }, // Only show if action buttons are true
    },
  },
  args: {
    type: "danger",
    alertTitle: "",
    alertMessage:
      "You successfully read this important alert message. Green often indicates something successful or positive.",
    showLeadingIcon: false,
    leadingIcon: "x-circle",
    showDismissIcon: false,
    showActionButtons: false,
    primaryButtonLabel: "Proceed",
    linkButtonLabel: "Cancel",
  },
};

// Variants
export const SuccessAlert = {
  args: {
    type: "success",
  },
};

export const DangerAlertWithIconAndButtons = {
  args: {
    type: "danger",
    alertTitle: "Danger Alert",
    showLeadingIcon: true,
    leadingIcon: "x-circle",
    showActionButtons: true,
  },
};

export const WarningAlertWithDismissal = {
  args: {
    type: "warning",
    showDismissIcon: true,
  },
};

export const InfoAlert = {
  args: {
    type: "info",
    alertMessage: "This is an info alert.",
  },
};

export const DarkAlertWithCustomContent = {
  args: {
    type: "dark",
    alertTitle: "Dark Mode Alert",
    alertMessage: "This is a custom message in dark mode.",
    showActionButtons: true,
    primaryButtonLabel: "Acknowledge",
  },
};
