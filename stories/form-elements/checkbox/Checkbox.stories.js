// Checkbox.stories.js

import { createCheckbox } from "./Checkbox";

export default {
  title: "Form Elements / Checkbox",
  tags: ["autodocs"],
  render: createCheckbox,
  argTypes: {
    checkboxes: {
      control: { type: "array" },
      description:
        "Array of checkbox labels. Each item in the array represents the text for a checkbox.",
      defaultValue: ["Primary Checkbox", "Secondary Checkbox"],
    },
    isVertical: {
      control: { type: "boolean" },
      description:
        "Arranges checkboxes vertically when true, or horizontally when false.",
      defaultValue: false,
    },
  },
};

// Story variants

export const HorizontalCheckboxGroup = {
  args: {
    checkboxes: ["Primary Checkbox", "Secondary Checkbox", "Tertiary Checkbox"],
    isVertical: false,
  },
};

export const VerticalCheckboxGroup = {
  args: {
    checkboxes: ["Primary Checkbox", "Secondary Checkbox", "Tertiary Checkbox"],
    isVertical: true,
  },
};

export const SingleCheckbox = {
  args: {
    checkboxes: ["Primary Checkbox"],
    isVertical: false,
  },
};
