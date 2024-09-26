export const createAvatar = ({
  type,
  size,
  outline,
  badge,
  badgePosition,
  grouped,
}) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-10 h-10",
    xlarge: "w-12 h-12",
  };

  const fontSizeClasses = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-lg",
    xlarge: "text-2xl",
  };

  const typeContent = {
    image: `<img src="https://i.pravatar.cc/48?img=1" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded" />`,
    icon: `<i class="bi bi-alarm ${fontSizeClasses[size]}"></i>`,
    text: `<span class="font-bold ${fontSizeClasses[size]}">JD</span>`,
  };

  const outlineClass = outline ? "border-2 border-white" : "";
  const badgeContent = badge
    ? `<span class="absolute ${badgePosition === "top" ? "-top-1 -right-1" : "-bottom-1 -right-1"} right-0 inline-block w-3 h-3 bg-red-600 rounded-full"></span>`
    : "";
  const groupClass = grouped ? "stacked-avatars" : "";

  return `
      <div class="relative inline-flex items-center justify-center bg-primary-500 ${sizeClasses[size]} text-white rounded ${outlineClass} ${groupClass}">
        ${typeContent[type]}
        ${badgeContent}
      </div>
    `;
};
