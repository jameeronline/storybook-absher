import { tv } from "tailwind-variants";
export const createButtonSwitchComponent = ({
  elementId = "toggle-component", // Unique ID for the component
  labels = ["Code mode", "Visual mode"], // Default labels for the two states
  size = "medium",
  leadingIcon = false, // Whether to show the button as leading
  trailIcon = false, // Whether to add an icon at the end of the label
  rounded = true, // Whether the buttons should be rounded
}) => {
  const buttonSwitchClasses = tv({
    slots: {
      base: "relative inline-flex items-center group bg-slate-100",
      input: "order-2 hidden peer",
      labelBase:
        "inline-flex items-center justify-center order-1 gap-2 text-sm font-medium tracking-wide cursor-pointer transition-colors",
      activeLabel:
        "text-white bg-primary-800 hover:bg-primary-900 focus:bg-primary-950 peer-checked:bg-transparent peer-checked:text-slate-500 hover:peer-checked:bg-transparent peer-checked:hover:text-slate-600 focus:peer-checked:bg-transparent",
      label:
        "bg-transparent text-slate-500 hover:text-slate-600 peer-checked:bg-primary-800 peer-checked:text-white hover:peer-checked:bg-primary-900 peer-checked:hover:text-white focus:peer-checked:bg-primary-700",
      icon: "",
    },
    variants: {
      size: {
        small: { labelBase: "h-8 px-4 text-xs", icon: "text-sm" },
        medium: { labelBase: "h-10 px-5 text-sm", icon: "text-md" },
        large: { labelBase: "h-12 px-6 text-base", icon: "text-lg" },
        xlarge: { labelBase: "h-16 px-8 text-lg", icon: "text-2xl" },
      },
    },
    compoundSlots: [
      { slots: ["labelBase", "base"], rounded: true, class: "rounded-full" },
      { slots: ["labelBase", "base"], rounded: false, class: "rounded-md" },
    ],
  });

  const { base, input, labelBase, activeLabel, label, icon } =
    buttonSwitchClasses({
      size: size,
      rounded: rounded,
    });

  return `
      <div class="${base()}">
        <input class="${input()}" type="checkbox" id="id-${elementId}" />
        
        <!-- First label -->
        <label class="${labelBase()} ${activeLabel()}" for="id-${elementId}">
          ${leadingIcon ? `<i class="bi ${labels[0].icon} ${icon()}"></i>` : ""}
          ${labels[0].label}
          ${trailIcon ? `<i class="bi ${labels[0].icon} ${icon()}"></i>` : ""}
        </label>

        <!-- Second label -->
        <label class="${labelBase()} ${label()}" for="id-${elementId}">
          ${leadingIcon ? `<i class="bi ${labels[1].icon} ${icon()}"></i>` : ""}
          ${labels[1].label}
          ${trailIcon ? `<i class="bi ${labels[1].icon} ${icon()}"></i>` : ""}
        </label>
      </div>
    `;
};
