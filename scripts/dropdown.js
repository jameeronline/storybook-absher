// dropdownInteractions.js

export function initDropdownInteractions() {
  document.addEventListener("click", (event) => {
    // Toggle dropdown when clicking on the button
    const button = event.target.closest("[data-dropdown-toggle]");
    if (button) {
      const dropdownId = button.getAttribute("data-dropdown-toggle");
      const dropdownMenu = document.querySelector(
        `[data-dropdown-menu="${dropdownId}"]`,
      );
      if (dropdownMenu) {
        dropdownMenu.classList.remove("hidden");
      }
    } else {
      // Close all dropdowns when clicking outside
      document.querySelectorAll("[data-dropdown-menu]").forEach((menu) => {
        if (!menu.classList.contains("hidden")) {
          menu.classList.add("hidden");
        }
      });
    }
  });
}
