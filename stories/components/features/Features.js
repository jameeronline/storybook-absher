// Function to create feature item
export const createFeatureItem = ({
  type = "one-line", // Default type to 'one-line'
  iconPosition = "left", // Default icon position to 'left'
  content = [], // Default empty content array
  isSquare = false, // Default square icon to false
}) => {
  // Check if content array has at least 3 items
  if (!content || content.length < 3) {
    throw new Error("Content must contain at least 3 items.");
  }

  // Define the alignment and layout classes based on iconPosition
  const alignmentClasses = {
    left: "lg:flex-row items-start",
    center: "flex-col items-center text-center",
    "top-left": "flex-col items-start",
  };

  // Define the icon classes based on isSquare
  const iconContainerClass = isSquare
    ? "flex items-center justify-center w-10 h-10 shrink-0 p-2 text-white rounded bg-primary-500"
    : "text-primary-500 text-2xl leading-none";

  // Map each content item to HTML markup
  const textMarkup = content
    .map(
      (item) => `
          <div class="col-span-4">
            <div class="flex gap-4 ${alignmentClasses[iconPosition]}">
              <div class="${iconContainerClass}">
                <i class="bi bi-${item.iconName}"></i>
              </div>
              <div class="flex flex-col justify-center w-full min-w-0 text-base">
                ${
                  type === "title"
                    ? `
                        <h3 class="pb-2 mb-2 text-lg font-medium text-slate-700">${item.title}</h3>
                        <p class="text-slate-500">${item.description}</p>
                      `
                    : `
                        <p class="text-slate-500">
                          <strong class="font-medium text-slate-700">${item.title}:</strong>
                          ${item.description}
                        </p>
                      `
                }
              </div>
            </div>
          </div>`,
    )
    .join("");

  // Return the complete HTML structure
  return `
      <div class="container px-6 mx-auto">
        <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          ${textMarkup}
        </div>
      </div>`;
};
