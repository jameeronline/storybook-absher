import { createDropdown } from "./Dropdown";

//config
import { typeVariant } from "../../utilities/config";

// Export default meta information
export default {
  title: "Components/Dropdown",
  tags: ["autodocs"],
  render: createDropdown,
  loaders: [
    async () => {
      document.addEventListener("DOMContentLoaded", () => {
        console.log(document.querySelectorAll("button[data-dropdown]"));
        document.querySelectorAll("button[data-dropdown]").forEach((item) => {
          item.addEventListener("click", () => {
            console.log("clicked");
          });
        });
      });
    },
  ],
  argTypes: {
    label: {
      control: "text",
      description: "label for the button",
      defaultValue:
        "You successfully read this important alert message. Green often indicates something successful or positive.",
    },
    menuItems: {
      control: "object",
      description:
        "An array of content objects, each containing title, description, and icon information.",
    },
    varient: {
      control: {
        type: "select",
        options: typeVariant,
      },
      description: "Choose the varient of the dropdown button",
      defaultValue: "primary",
    },
    withIcon: {
      control: "boolean",
      description: "Show icons next to menu items",
      defaultValue: true,
    },
    withDescription: {
      control: "boolean",
      description: "Show descriptions below menu item titles",
      defaultValue: true,
    },
  },
  args: {
    label: "Choose One",
    varient: "primary",
    withIcon: true,
    withDescription: true,
    menuItems: [
      {
        title: "Dashboard",
        description: "Quick overview of all basic metrics and settings",
        icon: "bi-pie-chart",
      },
      {
        title: "Metrics and analytics",
        description: "Detailed analytic data reviews management",
        icon: "bi-graph-up-arrow",
      },
      {
        title: "User settings",
        description:
          "User settings allow you to configure your email preferences",
        icon: "bi-gear",
      },
    ],
  },
};

// Default story
export const DefaultDropdown = {
  args: {},
};

export const NoIconsDropdown = {
  args: {
    varient: "secondary",
    withIcon: false,
    withDescription: true,
  },
};

export const SimpleDropdown = {
  args: {
    varient: "outline",
    withIcon: false,
    withDescription: false,
  },
};
