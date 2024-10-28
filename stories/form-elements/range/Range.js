// RangeSelect.js
import { tv } from "tailwind-variants";

export const createRangeSelect = ({
  label = "Default Range",
  size = "default",
  type = "default",
}) => {
  const rangeClassNames = tv({
    slots: {
      labelEl: "block mb-2 text-slate-600 dark:text-white",
      input:
        "w-full bg-typo-200 rounded-lg appearance-none cursor-pointer dark:bg-typo-700",
    },
    variants: {
      size: {
        small: {
          input: "h-1",
          labelEl: "text-sm",
        },
        default: {
          input: "h-2",
          labelEl: "text-md",
        },
        large: {
          input: "h-4",
          labelEl: "text-base",
        },
      },
    },
  });

  // Define type properties based on different types
  let typeAttributes = "";
  switch (type) {
    case "minMax":
      typeAttributes = 'min="0" max="100"';
      break;
    case "steps":
      typeAttributes = 'min="0" max="100" step="10"';
      break;
    case "advanced":
      typeAttributes = 'min="0" max="100" step="5"';
      break;
    default:
      typeAttributes = "";
      break;
  }

  const { labelEl, input } = rangeClassNames({ size: size });

  // Return the range input component
  return `
      <label class="${labelEl()}">${label}</label>
      <input 
        type="range" 
        value="50"
        ${typeAttributes} 
        class="${input()}"
      >
    `;
};
