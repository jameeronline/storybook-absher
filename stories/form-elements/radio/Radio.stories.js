// Radio.stories.js
import { createRadio } from "./Radio";

export default {
  title: "Form Elements / Radio",
  tags: ["autodocs"],
  render: createRadio,
  argTypes: {
    radios: {
      control: { type: "array" },
      description:
        "Array of radio labels. Each item in the array represents the text for a radio button.",
      defaultValue: ["Option 1", "Option 2", "Option 3"],
    },
    name: {
      control: { type: "text" },
      description: "Name attribute for the radio buttons group.",
      defaultValue: "radio-group",
    },
    isVertical: {
      control: { type: "boolean" },
      description:
        "Arranges radio buttons vertically when true, or horizontally when false.",
      defaultValue: false,
    },
  },
  args: {
    name: "radio-group",
  },
};

// Story variants

export const HorizontalRadioGroup = {
  args: {
    radios: ["Huey", "Dewey", "Louie"],
    name: "horizondal",
    isVertical: false,
  },
};

export const VerticalRadioGroup = {
  args: {
    radios: ["Huey", "Dewey", "Louie"],
    name: "vertical",
    isVertical: true,
  },
};

export const SingleRadio = {
  args: {
    radios: ["Huey"],
    name: "single",
    isVertical: false,
  },
};
