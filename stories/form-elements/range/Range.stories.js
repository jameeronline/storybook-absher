import { createRangeSelect } from "./Range";

export default {
  title: "Form Elements/Range",
  tags: ["autodocs"],
  render: createRangeSelect,
  argTypes: {
    label: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
    type: {
      control: {
        type: "select",
      },
      options: ["default", "minMax", "steps", "advanced"],
    },
  },
  args: {
    label: "Default Range",
    size: "default",
    type: "default",
  },
};

// Default story template
export const DefaultRange = {};

export const SmallRange = {
  args: {
    label: "Small Range",
    size: "small",
    type: "default",
  },
};

export const LargeRange = {
  args: {
    label: "Large Range",
    size: "large",
    type: "default",
  },
};

export const MinMaxRange = {
  args: {
    label: "Range with Min and Max",
    size: "default",
    type: "minMax",
  },
};

export const SteppedRange = {
  args: {
    label: "Range with Steps",
    size: "default",
    type: "steps",
  },
};

export const AdvancedRange = {
  args: {
    label: "Advanced Range",
    size: "default",
    type: "advanced",
  },
};
