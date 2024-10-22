import { content } from "./data";
import { createListJS } from "./Listing";

export default {
  title: "Vendor/ListJS",
  tags: ["autodocs"],
  render: createListJS,
  argTypes: {
    content: {
      control: "object",
      description:
        "Array of list item objects containing title, description, icon, avatar, and image.",
      defaultValue: [],
    },
    pagination: {
      control: { type: "boolean" },
      description: "Enable or disable pagination for the list.",
      defaultValue: false,
    },
    search: {
      control: { type: "boolean" },
      description: "Enable or disable the search bar.",
      defaultValue: true,
    },
  },
  args: {
    content: content,
    pagination: false,
    search: true,
  },
};

// Variants

export const BasicList = {
  args: {
    pagination: true,
    search: true,
  },
};

// export const SearchEnabled = {
//   args: {
//     search: true,
//   },
// };

// export const PaginatedList = {
//   args: {
//     pagination: true,
//   },
// };

// export const SearchAndPaginated = {
//   args: {
//     pagination: true,
//     search: true,
//   },
// };
