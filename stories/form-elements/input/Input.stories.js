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
      defaultValue: "text", // Default value set to "text"
    },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
      description: "The size of the input",
      defaultValue: "default", // Default value set to "default"
    },
    isLabel: {
      control: { type: "boolean" },
      description: "Toggle the visibility of the label",
      defaultValue: false, // Default value set to false
    },
    label: {
      control: { type: "text" },
      description: "The text for the label",
      defaultValue: "Your Name", // Default label text
      if: { arg: "isLabel", truthy: true }, // Visible only if `isLabel` is true
    },
    placeholder: {
      control: { type: "boolean" },
      description: "Toggle the visibility of the placeholder",
      defaultValue: true, // Default value set to true
    },
    placeholderText: {
      control: { type: "text" },
      description: "The text for the placeholder",
      defaultValue: "Enter your name", // Default placeholder text
      if: { arg: "placeholder", truthy: true }, // Visible only if `placeholder` is true
    },
    helperText: {
      control: { type: "boolean" },
      description: "Toggle the visibility of the helper text",
      defaultValue: false, // Default value set to false
    },
    helperLabel: {
      control: { type: "text" },
      description: "The text for the helper label",
      defaultValue: "Text field with helper text", // Default helper text
      if: { arg: "helperText", truthy: true }, // Visible only if `helperText` is true
    },
    isLeadIcon: {
      control: { type: "boolean" },
      description: "Toggle the visibility of the leading icon",
      defaultValue: false, // Default value set to false
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
      if: { arg: "isLeadIcon", truthy: true }, // Visible only if `isLeadIcon` is true
    },
    isTrailIcon: {
      control: { type: "boolean" },
      description: "Toggle the visibility of the trailing icon",
      defaultValue: false, // Default value set to false
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
      if: { arg: "isTrailIcon", truthy: true }, // Visible only if `isTrailIcon` is true
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
    isLeadIcon: true,
    leadingIcon: "person",
    isTrailIcon: true,
    trailingIcon: "calendar",
  },
};

// Variants with user-friendly names

export const DefaultTextInput = {
  name: "Text Input",
  args: {
    as: "text",
  },
};

export const DefaultInputWithUserIcon = {
  name: "Input with Leading User Icon",
  args: {
    as: "text",
    isLabel: true,
    label: "Username",
    isLeadIcon: true,
    leadingIcon: "person",
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
  name: "Default Text Input With Search",
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
