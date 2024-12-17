import { tv } from "tailwind-variants";
export const createInput = ({
  as = "text",
  size = "default",
  isLabel = true,
  label = "Your Name",
  placeholder = false,
  placeholderText = null,
  helperText = true,
  helperLabel = "Text field with helper text",
  isLeadIcon = true,
  leadingIcon = null,
  isTrailIcon = false,
  trailingIcon = null,
}) => {
  // Determine size classes for the input
  const inputClassNames = tv({
    slots: {
      base: "relative",
      form_group: "relative mt-1 mb-4",
      input:
        "relative w-full px-4 transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-danger-500 invalid:text-danger-500 focus:border-primary-800 focus:outline-none invalid:focus:border-danger-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400",
      leadingIcon_slot:
        "absolute w-6 h-6 cursor-pointer top-1/2 -translate-y-1/2 text-slate-400",
      trailingIcon_slot:
        "absolute w-6 h-6 cursor-pointer top-3 right-2 text-slate-400",
      label_slot:
        "cursor-text peer-focus:cursor-default text-md text-slate-600 transition-all peer-required:after:text-danger-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-danger-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary-900 peer-invalid:peer-focus:text-danger-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent",
      helptext_slot:
        "flex justify-between w-full px-4 mt-2 text-xs transition text-slate-400 peer-invalid:text-danger-500",
    },
    variants: {
      size: {
        small: {
          label_slot: "text-sm",
          input: "h-10",
          leadingIcon_slot: "text-xl w-4 h-4",
          trailingIcon_slot: "text-xl w-4 h-4",
        },
        default: {
          input: "h-12",
          leadingIcon_slot: "text-2xl w-6 h-6 left-4",
          trailingIcon_slot: "text-2xl w-6 h-6 right-4",
        },
        large: {
          input: "h-14",
          leadingIcon_slot: "text-2xl w-8 h-8 top-4",
          trailingIcon_slot: "text-2xl w-8 h-8 top-4",
        },
      },
    },
    compoundVariants: [
      {
        isLeadIcon: true,
        class: {
          input: "ps-12",
        },
      },
    ],
  });

  const {
    base,
    form_group,
    label_slot,
    input,
    leadingIcon_slot,
    trailingIcon_slot,
    helptext_slot,
  } = inputClassNames({
    size: size,
    isLeadIcon: isLeadIcon,
    isTrailIcon: isTrailIcon,
  });

  // Icons rendering with dynamic size
  const leadIconMarkup = isLeadIcon
    ? `<span class="${leadingIcon_slot()}"><i class="bi bi-${leadingIcon}"></i></span>`
    : "";

  const trailIconMarkup = isTrailIcon
    ? `<span class="${trailingIcon_slot()}"><i class="bi bi-${trailingIcon}"></i></span>`
    : "";

  // Label
  const labelMarkup = isLabel
    ? `
    <label for="input-field" class="${label_slot()}">${label}</label>`
    : "";

  // Helper text
  const helperTextMarkup = helperText
    ? `
    <small class="${helptext_slot()}"><span>${helperLabel}</span></small>`
    : "";

  return `
    <div class=${base()} data-name="form-group">
      ${labelMarkup}
      <div class="${form_group()}">
        <input id="input-field" type="${as}" placeholder="${placeholder ? placeholderText : ``}" class="${input()}" />
        ${leadIconMarkup}
        ${trailIconMarkup}
        ${helperTextMarkup}
      </div>
    </div>
  `;
};
