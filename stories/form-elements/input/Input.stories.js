// Input.stories.js
import { createInput } from "./Input";

export default {
  title: "Form Elements / Input",
  tags: ["autodocs"],
  render: createInput,
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["text", "password", "number", "date", "email"],
      description: "The type of input field",
    },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
      description: "The size of the input",
    },
    isLabel: {
      control: { type: "boolean" },
      description: "Toggle the visibility of the label",
    },
    label: {
      control: { type: "text" },
      description: "The text for the label",
      if: { arg: "isLabel", truthy: true },
    },
    placeholder: {
      control: { type: "boolean" },
      description: "Toggle the visibility of the placeholder",
    },
    placeholderText: {
      control: { type: "text" },
      description: "The text for the placeholder",
      if: { arg: "placeholder", truthy: true },
    },
    helperText: {
      control: { type: "boolean" },
      description: "Toggle the visibility of the helper text",
    },
    helperLabel: {
      control: { type: "text" },
      description: "The text for the helper label",
      if: { arg: "helperText", truthy: true },
    },
    isLeadIcon: {
      control: { type: "boolean" },
      description: "Toggle the visibility of the leading icon",
    },
    leadingIcon: {
      control: { type: "select" },
      options: [
        "person",
        "envelope",
        "lock",
        "telephone",
        "calendar",
        "credit-card",
      ],
      description: "Select the leading icon for the input field",
      if: { arg: "isLeadIcon", truthy: true },
    },
    isTrailIcon: {
      control: { type: "boolean" },
      description: "Toggle the visibility of the trailing icon",
    },
    trailingIcon: {
      control: { type: "select" },
      options: [
        "person",
        "envelope",
        "lock",
        "telephone",
        "calendar",
        "credit-card",
      ],
      description: "Select the trailing icon for the input field",
      if: { arg: "isTrailIcon", truthy: true },
    },
  },
  args: {
    as: "text",
    size: "default",
    isLabel: true,
    label: "Your Name",
    placeholder: true,
    placeholderText: "Enter your name",
    helperText: false,
    helperLabel: "Text field with helper text",
    isLeadIcon: false,
    isTrailIcon: false,
  },
};

// Variants with user-friendly names

export const DefaultTextInput = {
  name: "Default Text Input",
  args: {
    as: "text",
    size: "default",
    label: "Your Name",
  },
};

export const LargeInputWithUserIcon = {
  name: "Large Input with Leading User Icon",
  args: {
    as: "text",
    size: "large",
    isLabel: true,
    label: "Username",
    isLeadIcon: true,
    leadingIcon: "person",
    isTrailIcon: false,
  },
};

export const InputWithPasswordAndIcons = {
  name: "Password Input with Leading and Trailing Icons",
  args: {
    as: "password",
    size: "default",
    isLabel: true,
    label: "Password",
    isLeadIcon: true,
    leadingIcon: "key",
    isTrailIcon: true,
    trailingIcon: "eye-slash",
  },
};

export const EmailInputWithHelperText = {
  name: "Email Input with Helper Text",
  args: {
    as: "email",
    size: "default",
    isLabel: true,
    label: "Email",
    placeholder: true,
    placeholderText: "Enter your email",
    helperText: true,
    helperLabel: "Please provide a valid email address",
  },
};

export const DateInputWithCalendarIcon = {
  name: "Date Input with Calendar Icon",
  args: {
    as: "date",
    size: "default",
    isLabel: true,
    label: "Date of Birth",
    isLeadIcon: true,
    leadingIcon: "calendar",
    isTrailIcon: false,
  },
};

export const PhoneNumberInputWithIcons = {
  name: "Phone Number Input with Leading and Trailing Icons",
  args: {
    as: "number",
    size: "default",
    isLabel: true,
    label: "Phone Number",
    isLeadIcon: true,
    leadingIcon: "telephone",
  },
};

export const DefaultTextInputWithSearch = {
  name: "Default Text Input",
  args: {
    as: "text",
    size: "default",
    isLabel: false,
    placeholder: true,
    placeholderText: "Search Ex: Enter your keywords",
    isTrailIcon: true,
    trailingIcon: "search",
  },
};
