export const createFooter = ({
  footerLinks = [],
  brand = { name: "Brand", description: "" },
  theme = "light",
  withSubfooter = false,
  numberOfColumns = 4,
} = {}) => {
  // Theme-specific classes
  const themeClasses = {
    light: "text-slate-500 bg-slate-100 border-slate-200",
    dark: "text-slate-400 bg-slate-900 border-slate-700",
    primary: "text-white bg-emerald-500 border-emerald-600",
  };

  const selectedTheme = themeClasses[theme] || themeClasses.light;

  // Setting up grid columns based on user input
  const columnsClass = `grid grid-cols-${numberOfColumns} gap-6 md:grid-cols-${numberOfColumns * 2} lg:grid-cols-${numberOfColumns * 3}`;

  return `
      <footer class="${selectedTheme}">
        <!-- Main footer -->
        <div class="pt-16 pb-12 text-sm border-t ${selectedTheme}">
          <div class="container px-6 mx-auto">
            <div class="${columnsClass}">
              <!-- Brand section -->
              <div class="col-span-${numberOfColumns} md:col-span-${numberOfColumns * 2} lg:col-span-${numberOfColumns}">
                <a aria-label="${brand.name} logo" class="flex items-center gap-2 mb-6 text-base font-medium leading-6 whitespace-nowrap focus:outline-none" href="javascript:void(0)">
                  <svg width="300" height="300" class="w-6 h-6 shrink-0 bg-emerald-500" xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG content goes here -->
                  </svg>
                  ${brand.name}
                </a>
                <p>${brand.description}</p>
              </div>
  
              <!-- Footer links -->
              ${footerLinks
                .map(
                  (footerLink) => `
                <nav class="col-span-2">
                  <h3 class="mb-6 text-base font-medium">${footerLink.title}</h3>
                  <ul>
                    ${footerLink.list
                      .map(
                        (link) => `
                      <li class="mb-2 leading-6">
                        <a href="${link.url}" class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">${link.label}</a>
                      </li>
                    `,
                      )
                      .join("")}
                  </ul>
                </nav>
              `,
                )
                .join("")}
            </div>
          </div>
        </div>
  
        ${withSubfooter ? `<div class="py-4 text-center text-xs ${selectedTheme}"> © 2024 ${brand.name}. All rights reserved. </div>` : ""}
      </footer>
    `;
};
