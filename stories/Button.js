import "./button.css";

export const createButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const mode = primary ? "bg-red-200" : "bg-green-200";
  btn.className = ["storybook-button", `storybook-button--${size}`, mode].join(
    " "
  );

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
