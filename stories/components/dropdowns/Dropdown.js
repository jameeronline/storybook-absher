export function createDropdown({
  label = "Choose One",
  menuItems = [],
  styling = "primary",
  withIcon = true,
  withDescription = true,
}) {
  const dropdownContainer = document.createElement("div");
  dropdownContainer.className = "relative inline-flex";

  const dropdownId = `dropdown-${Math.random().toString(36).substr(2, 9)}`; // Unique ID for each dropdown instance

  // Create button
  const button = document.createElement("button");
  button.id = "tailwind-dropdown";
  button.className =
    "inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none";
  button.innerHTML = `
      <span>${label}</span>
      <span class="relative only:-mx-5">
        <i class="bi bi-chevron-down"></i>
      </span>
    `;
  button.setAttribute("data-dropdown-id", dropdownId); // Associate the button with the dropdown

  // Create dropdown menu
  const dropdownMenu = document.createElement("ul");
  dropdownMenu.className =
    "absolute z-20 flex flex-col py-2 mt-1 list-none bg-white rounded shadow-md w-72 top-full shadow-slate-500/10 hidden"; // Hidden by default
  dropdownMenu.setAttribute("data-dropdown-id", dropdownId); // Associate the menu with the dropdown

  // Add menu items
  menuItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <a class="flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none" href="#">
          ${withIcon ? `<i class="bi ${item.icon}"></i>` : ""}
          <span class="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
            <span class="leading-5 truncate">${item.title}</span>
            ${
              withDescription
                ? `<span class="text-sm whitespace-normal opacity-70">${item.description}</span>`
                : ""
            }
          </span>
        </a>
      `;
    dropdownMenu.appendChild(listItem);
  });

  // Append the button and menu to the container
  dropdownContainer.appendChild(button);
  dropdownContainer.appendChild(dropdownMenu);

  return dropdownContainer;
}

// Storybook Story Definition
export const DropdownStory = () => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: "bi-speedometer2",
      description: "Overview of metrics",
    },
    { title: "Metrics", icon: "bi-bar-chart", description: "Analytics data" },
    { title: "Settings", icon: "bi-gear", description: "User preferences" },
  ];

  const dropdown1 = createDropdown({
    label: "Menu 1",
    menuItems,
    withIcon: true,
    withDescription: true,
  });

  const dropdown2 = createDropdown({
    label: "Menu 2",
    menuItems,
    withIcon: true,
    withDescription: false,
  });

  // Append to Storybook root element
  const container = document.createElement("div");
  container.appendChild(dropdown1);
  container.appendChild(dropdown2);

  // Add event listener for dropdown toggle
  container.addEventListener("click", function (event) {
    const button = event.target.closest("button");
    if (button && button.hasAttribute("data-dropdown-id")) {
      const dropdownId = button.getAttribute("data-dropdown-id");
      const dropdownMenu = container.querySelector(
        `ul[data-dropdown-id="${dropdownId}"]`,
      );
      dropdownMenu.classList.toggle("hidden");
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!container.contains(event.target)) {
      const dropdownMenus = container.querySelectorAll("ul");
      dropdownMenus.forEach((menu) => menu.classList.add("hidden"));
    }
  });

  return container;
};
