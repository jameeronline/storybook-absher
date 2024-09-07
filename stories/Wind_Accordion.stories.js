export default {
  title: "Wind UI / Accordion",
  tags: ["autodocs"],
  render: ({ type, outline, elevated }) => {
    const typeClasses = {
      basic: "text-slate-700 group-hover:text-slate-900",
      "basic with icon":
        "text-slate-700 group-hover:text-slate-900 flex items-center gap-2",
    };

    const outlineClass = outline ? "border border-slate-200" : "";
    const elevatedClass = elevated ? "shadow-lg" : "";

    return `
        <section class="w-full divide-y rounded divide-slate-200 ${outlineClass} ${elevatedClass}">
          <details class="p-4 group" open>
            <summary class="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer ${typeClasses[type]} focus-visible:outline-none transition-colors duration-300">
              ${type === "basic with icon" ? '<i class="bi bi-info-circle text-base text-primary-500"></i>' : ""}
              How does TailwindCSS work?
              <i class="bi bi-x absolute right-0 text-base transition duration-300 top-1 shrink-0 group-open:rotate-45"></i>
            </summary>
            <p class="mt-4 text-slate-500">
              Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles, and then writing them to a static CSS file.
            </p>
          </details>
          <details class="p-4 group">
            <summary class="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer ${typeClasses[type]} focus-visible:outline-none transition-colors duration-300">
              ${type === "basic with icon" ? '<i class="bi bi-info-circle text-base text-primary-500"></i>' : ""}
              How do I install TailwindCSS?
              <i class="bi bi-x absolute right-0 text-base transition duration-300 top-1 shrink-0 group-open:rotate-45"></i>
            </summary>
            <p class="mt-4 text-slate-500">
              The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js. Install tailwindcss via npm, and create your tailwind.config.js file.
            </p>
          </details>
        </section>
      `;
  },
  argTypes: {
    type: {
      label: "Type Select",
      control: { type: "select" },
      options: ["basic", "basic with icon"],
      defaultValue: "basic",
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
    type: "basic",
    outline: false,
    elevated: false,
  },
};

// Variants
export const Basic = {
  args: {
    type: "basic",
  },
};

export const BasicWithIcon = {
  args: {
    type: "basic with icon",
  },
};

export const BasicOutlined = {
  args: {
    type: "basic",
    outline: true,
  },
};

export const BasicElevated = {
  args: {
    type: "basic",
    elevated: true,
  },
};

export const BasicWithIconOutlined = {
  args: {
    type: "basic with icon",
    outline: true,
  },
};

export const BasicWithIconElevated = {
  args: {
    type: "basic with icon",
    elevated: true,
  },
};
