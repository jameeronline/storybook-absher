import { createAccordion } from "./Accordion";

export default {
  title: "Components/Accordion",
  tags: ["autodocs"],
  render: createAccordion,
  argTypes: {
    withIcon: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    outline: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    elevated: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
  args: {
    withIcon: false,
    outline: false,
    elevated: false,
  },
};

// Variants

export const Basic = {
  args: {
    withIcon: false,
    outline: false,
    elevated: false,
  },
};

export const BasicWithIcon = {
  args: {
    withIcon: true,
  },
};

export const BasicOutlined = {
  args: {
    outline: true,
  },
};

export const BasicElevated = {
  args: {
    elevated: true,
  },
};

export const BasicWithIconOutlined = {
  args: {
    withIcon: true,
    outline: true,
  },
};

export const BasicWithIconElevated = {
  args: {
    withIcon: true,
    elevated: true,
  },
};
