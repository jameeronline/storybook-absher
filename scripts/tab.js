// tabs.js
export function initializeTabs() {
  // Get all unique tab groups on the page
  const tabGroups = new Set(
    Array.from(document.querySelectorAll("[data-tab-group]")).map((el) =>
      el.getAttribute("data-tab-group"),
    ),
  );

  // Initialize tabs for each group
  tabGroups.forEach((group) => {
    const tabButtons = document.querySelectorAll(
      `[data-tab-target][data-tab-group="${group}"]`,
    );
    const tabContents = document.querySelectorAll(
      `[data-tab-content][data-tab-group="${group}"]`,
    );

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab-target");

        // Remove active classes only within the current group
        tabButtons.forEach((btn) => {
          btn.classList.remove("active-tab");
          btn.setAttribute("aria-selected", "false");
        });
        tabContents.forEach((content) => content.classList.add("hidden"));

        // Add active classes to the clicked button and corresponding tab content
        button.classList.add("active-tab");
        button.setAttribute("aria-selected", "true");
        document
          .querySelector(
            `[data-tab-content="${targetTab}"][data-tab-group="${group}"]`,
          )
          .classList.remove("hidden");
      });
    });
  });
}
