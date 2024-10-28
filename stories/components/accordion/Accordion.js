export const createAccordion = ({
  withIcon = false,
  outline = false,
  elevated = false,
  content = [],
  toggleIcon = "bi-x", // Default toggle icon
}) => {
  // Determine classes based on the arguments
  const typeClass = withIcon
    ? "text-slate-700 group-hover:text-slate-900 flex items-center gap-2"
    : "text-slate-700 group-hover:text-slate-900";

  const outlineClass = outline ? "border border-slate-200" : "";
  const elevatedClass = elevated ? "shadow-lg" : "";

  // Available toggle icons (dropdown)
  const toggleIcons = {
    "bi-x": "bi bi-x",
    "bi-chevron-down": "bi bi-chevron-down",
    "bi-plus": "bi bi-plus",
    "bi-arrow-down": "bi bi-arrow-down",
    "bi-caret-down": "bi bi-caret-down",
  };

  // Return the accordion HTML structure based on content
  return `
    <section class="w-full divide-y rounded divide-slate-200 ${outlineClass} ${elevatedClass}">
      ${content
        .map(
          (item, index) => `
            <details class="p-4 group" ${index === 0 ? "open" : ""}>
              <summary class="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer ${typeClass} focus-visible:outline-none transition-colors duration-300">
                ${withIcon ? `<i class="${item.icon} text-2xl text-primary-800"></i>` : ""}
                ${item.title}
                <i class="${toggleIcons[toggleIcon]} absolute right-0 text-xl transition duration-300 top-1 shrink-0 group-open:rotate-45"></i>
              </summary>
              <p class="mt-4 text-slate-500">${item.description}</p>
            </details>
          `,
        )
        .join("")}
    </section>
  `;
};
