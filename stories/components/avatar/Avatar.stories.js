import { createAvatar } from "./Avatar";

import { baseTypeVariant } from "../../../config/config";

export default {
  title: "Components / Avatar",
  tags: ["autodocs"],
  render: createAvatar,
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["image", "icon", "text"],
      defaultValue: "image",
      description:
        "The type of content displayed in the avatar (image, icon, or text).",
    },
    type: {
      control: { type: "select" },
      options: baseTypeVariant,
      defaultValue: "primary",
      description:
        "The type of content displayed in the avatar (image, icon, or text).",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge"],
      defaultValue: "medium",
      description: "The size of the avatar (small, medium, large or xlarge).",
    },
    rounded: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Whether the avatar should have rounded.",
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
    as: "image",
    type: "primary",
    size: "large",
    outline: false,
    rounded: false,
    grouped: false,
    badge: false,
    badgePosition: "top",
  },
};

//Varients
export const ImageAvatar = {
  args: {
    as: "image",
    outline: false,
    grouped: false,
    badge: false,
    badgePosition: "top",
  },
};

export const IconAvatar = {
  args: {
    as: "icon",
    outline: true,
    grouped: false,
    badge: true,
    badgePosition: "bottom",
  },
};

export const TextAvatar = {
  args: {
    as: "text",
    outline: true,
    grouped: true,
    badge: true,
    badgePosition: "top",
  },
};

export const GroupedAvatars = {
  args: {
    as: "image",
    outline: false,
    badge: false,
    grouped: true,
  },
};
