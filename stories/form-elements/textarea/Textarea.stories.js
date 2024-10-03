// textarea.stories.js
import { createTextarea } from "./Textarea";

export default {
  title: "Form Elements/Textarea",
  tags: ["autodocs"],
  render: createTextarea,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Custom label for the textarea",
    },
    placeholderText: {
      control: { type: "text" },
      description: "Custom placeholder text for the textarea",
    },
    size: {
      control: { type: "select" },
      options: ["default", "large"],
      description: "Controls the size of the textarea",
    },
    helpText: {
      control: { type: "boolean" },
      description: "Displays help text below the textarea",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the textarea",
    },
    isError: {
      control: { type: "boolean" },
      description: "Displays an error state for the textarea",
    },
    isTextCounter: {
      control: { type: "boolean" },
      description: "Displays an text counter value for the textarea",
    },
  },
  args: {
    size: "default",
    helpText: false,
    disabled: false,
    isError: false,
    isTextCounter: false,
    label: "Write your message",
    placeholderText: "Write your message",
  },
};

export const RegularTextarea = {
  args: {},
};

export const DisabledTextarea = {
  args: {
    label: "Disabled Textarea",
    placeholderText: "Cannot type here",
    size: "default",
    helpText: false,
    disabled: true,
    isError: false,
  },
};

export const ErrorStateTextarea = {
  args: {
    label: "Error Textarea",
    placeholderText: "Enter valid input",
    size: "default",
    helpText: false,
    disabled: false,
    isError: true,
  },
};
