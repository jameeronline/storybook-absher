import List from "list.js";

// Function to create List.js component
export const createListJS = ({
  content = [],
  pagination = false,
  search = false,
}) => {
  const searchInput = search
    ? '<input class="search" placeholder="Search..."/>'
    : "";
  const paginationControls = pagination ? '<ul class="pagination"></ul>' : "";

  const listItems = content
    .map(
      (item) => `
      <li class="flex items-center gap-4 px-4 py-3">
        <div class="self-start shrink-0">
            ${item.avatar ? `<img src="${item.avatar}" alt="${item.title}" class="w-10 h-10 rounded-full"/>` : ""}
        </div>
        <div class="flex flex-col min-w-0">
          <h3 class="name text-base truncate">${item.title}</h3>
          <p class="city text-sm">${item.description}</p>
        </div>
        ${item.image ? `<img src="${item.image}" class="w-10 h-10" alt="${item.title}"/>` : ""}
      </li>
    `,
    )
    .join("");

  const componentHtml = `
    <div id="hacker-list" class="relative w-full">
      ${searchInput}
      <ul class="list divide-y divide-slate-200">
        ${listItems}
      </ul>
      ${paginationControls}
    </div>
  `;

  const element = document.createElement("div");
  element.innerHTML = componentHtml;

  // Initialize List.js
  const options = {
    valueNames: ["name", "city"],
    page: pagination ? 6 : undefined,
    pagination: pagination ? true : false,
  };

  // Initialize Glide.js instance
  document.addEventListener("DOMContentLoaded", () => {
    new List("hacker-list", options);
  });

  return element;
};
