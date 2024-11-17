import { tv } from "tailwind-variants";

export const createAccordion = ({
  withIcon = false,
  outline = false,
  elevated = false,
  content = [],
  toggleIcon = "bi-x", // Default toggle icon
}) => {
  const accordionClassNames = tv({
    slots: {
      base: "w-full divide-y rounded divide-slate-200 text-slate-700 group-hover:text-slate-900",
      itemBase: "p-4 group",
      head: "[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer focus-visible:outline-none transition-colors duration-300",
      body: "mt-4 text-slate-500 transition duration-300",
      leadIcon: "text-2xl text-primary-800",
      trailIcon:
        "absolute right-0 text-xl transition duration-300 top-1 shrink-0 group-open:rotate-180",
    },
    variants: {
      icon: {
        true: {
          head: "flex items-center gap-3",
        },
      },
      outline: {
        true: {
          base: "border border-slate-200",
        },
      },
      elevated: {
        true: {
          base: "shadow-lg",
        },
      },
    },
  });

  // Available toggle icons (dropdown)
  const toggleIcons = {
    "bi-x": "bi bi-x",
    "bi-chevron-down": "bi bi-chevron-down",
    "bi-plus": "bi bi-plus",
    "bi-arrow-down": "bi bi-arrow-down",
    "bi-caret-down": "bi bi-caret-down",
  };

  const { base, itemBase, head, body, leadIcon, trailIcon } =
    accordionClassNames({
      icon: withIcon,
      outline: outline,
      elevated: elevated,
    });

  // Return the accordion HTML structure based on content
  return `
    <section class="${base()}">
      ${content
        .map(
          (item, index) => `
            <details class="${itemBase()}" ${index === 0 ? "open" : ""}>
              <summary class="${head()}">
                ${withIcon ? `<i class="${item.icon} ${leadIcon()}"></i>` : ""}
                ${item.title}
                <i class="${toggleIcons[toggleIcon]} ${trailIcon()}"></i>
              </summary>
              <div class="${body()}">
                <p>${item.description}</p>
              </div>
            </details>
          `,
        )
        .join("")}
    </section>
  `;
};
