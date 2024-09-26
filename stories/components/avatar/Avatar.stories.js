import { createAvatar } from "./Avatar";

export default {
  title: "Components / Avatar",
  tags: ["autodocs"],
  render: createAvatar,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["image", "icon", "text"],
      defaultValue: "image",
      description:
        "The type of content displayed in the avatar (image, icon, or text).",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge"],
      defaultValue: "medium",
      description: "The size of the avatar (small, medium, large or xlarge).",
    },
    outline: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Whether the avatar should have an outline.",
    },
    badge: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Whether to display a badge on the avatar.",
    },
    badgePosition: {
      control: { type: "select" },
      if: { arg: "badge" },
      options: ["top", "bottom"],
      defaultValue: "top",
      description: "Position of the badge (top or bottom right corner).",
    },
    grouped: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Whether the avatar is part of a stacked group of avatars.",
    },
  },
  args: {
    type: "image",
    outline: false,
    badge: false,
    badgePosition: "top",
    grouped: false,
    size: "large",
  },
};

//Varients
export const ImageAvatar = {
  args: {
    type: "image",
    outline: false,
    badge: false,
    badgePosition: "top",
    grouped: false,
  },
};

export const IconAvatar = {
  args: {
    type: "icon",
    outline: true,
    badge: true,
    badgePosition: "bottom",
    grouped: false,
  },
};

export const TextAvatar = {
  args: {
    type: "text",
    outline: true,
    badge: true,
    badgePosition: "top",
    grouped: true,
  },
};

export const GroupedAvatars = {
  args: {
    type: "image",
    outline: false,
    badge: false,
    grouped: true,
  },
};
