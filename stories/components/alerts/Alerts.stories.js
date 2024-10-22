import { createAlert } from "./Alert";
import { semanticTypeVarients } from "../../utilities/config";

export default {
  title: "Components/Alerts",
  tags: ["autodocs"],
  render: createAlert,
  argTypes: {
    type: {
      control: "select",
      options: semanticTypeVarients,
      description: "Type of alert",
      defaultValue: "success",
    },
    title: {
      control: "text",
      description: "Title of the alert",
      defaultValue: "Alert Title",
    },
    message: {
      control: "text",
      description: "Main content of the alert",
      defaultValue:
        "You successfully read this important alert message. Green often indicates something successful or positive.",
    },
    leadingIcon: {
      control: "boolean",
      description: "Display the leading icon",
      defaultValue: false,
    },
    dismissIcon: {
      control: "boolean",
      description: "Display the dismiss icon",
      defaultValue: false,
    },
    actionButtons: {
      control: "boolean",
      description: "Display action buttons",
      defaultValue: false,
    },
    primaryButtonLabel: {
      control: "text",
      description: "Label for the primary action button",
      defaultValue: "Proceed",
      if: { arg: "actionButtons", truthy: true }, // Only show if action buttons are true
    },
    linkButtonLabel: {
      control: "text",
      description: "Label for the link action button",
      defaultValue: "Cancel",
      if: { arg: "actionButtons", truthy: true }, // Only show if action buttons are true
    },
  },
  args: {
    type: "danger",
    title: "",
    message:
      "An error occurred. Please try again or contact support if the problem persists.",
    leadingIcon: false,
    dismissIcon: false,
    actionButtons: false,
    primaryButtonLabel: "Proceed",
    linkButtonLabel: "Cancel",
  },
};

// Variants
export const DangerAlert = {
  args: {
    type: "danger",
  },
};

export const SuccessAlert = {
  args: {
    type: "success",
    leadingIcon: true,
    message: "Operation completed successfully. Your changes have been saved.",
  },
};

export const InfoAlert = {
  args: {
    type: "info",
    message:
      "Please be aware of upcoming maintenance scheduled for this weekend.",
    dismissIcon: true,
  },
};

export const WarningAlertWithDismissal = {
  args: {
    type: "warning",
    leadingIcon: true,
    dismissIcon: true,
    message:
      "Please check the input and ensure all required fields are filled out correctly.",
  },
};

export const DangerAlertWithIconAndButtons = {
  args: {
    type: "danger",
    title: "Danger Alert",
    leadingIcon: true,
    actionButtons: true,
  },
};
