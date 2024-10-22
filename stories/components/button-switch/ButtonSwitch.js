export const createButtonSwitchComponent = ({
  elementId = "toggle-component", // Unique ID for the component
  labels = ["Code mode", "Visual mode"], // Default labels for the two states
  size = "medium",
  leadingIcon = false, // Whether to show the button as leading
  trailIcon = false, // Whether to add an icon at the end of the label
  rounded = true, // Whether the buttons should be rounded
}) => {
  const roundedClass = rounded ? "rounded-full" : "rounded";

  const sizeClasses = {
    small: "h-8 px-4",
    medium: "h-10 px-5",
    large: "h-12 px-6",
    xlarge: "h-16 px-8",
  };

  return `
      <div class="relative inline-flex items-center ${roundedClass} group bg-slate-100">
        <input class="order-2 h- hidden peer" type="checkbox" id="id-${elementId}" />
        
        <!-- First label -->
        <label class="inline-flex items-center justify-center order-1 ${sizeClasses[size]} gap-2 text-sm font-medium tracking-wide text-white transition-colors ${roundedClass} cursor-pointer bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 peer-checked:bg-transparent peer-checked:text-slate-500 hover:peer-checked:bg-transparent peer-checked:hover:text-slate-600 focus:peer-checked:bg-transparent" for="id-${elementId}">
          ${leadingIcon ? `<i class="bi ${labels[0].icon}"></i>` : ""}
          ${labels[0].label}
          ${trailIcon ? `<i class="bi ${labels[0].icon}"></i>` : ""}
        </label>

        <!-- Second label -->
        <label class="inline-flex items-center justify-center order-1 ${sizeClasses[size]} gap-2 text-sm font-medium tracking-wide transition-colors bg-transparent ${roundedClass} cursor-pointer text-slate-500 hover:text-slate-600 peer-checked:bg-emerald-500 peer-checked:text-white hover:peer-checked:bg-emerald-600 peer-checked:hover:text-white focus:peer-checked:bg-emerald-700" for="id-${elementId}">
          ${leadingIcon ? `<i class="bi ${labels[1].icon}"></i>` : ""}
          ${labels[1].label}
          ${trailIcon ? `<i class="bi ${labels[1].icon}"></i>` : ""}
        </label>
      </div>
    `;
};
