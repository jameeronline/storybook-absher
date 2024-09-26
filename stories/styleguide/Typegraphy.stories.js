export default {
  title: "Styleguide/Typography",
  tags: ["autodocs"],
  render: ({ label, type, fontWeight, color = "red", tag }) => {
    const fontType = {
      "Display 1": "text-6xl",
      "Display 2": "text-5xl",
      "Display 3": "text-4xl",
      "Display 4": "text-3xl",
      "Display 5": "text-2xl",
      "Heading 1": "text-xl",
      "Heading 2": "text-lg",
      "Heading 3": "text-md",
      "Heading 4": "text-sm",
      "Heading 5": "text-xs",
      "Heading 6": "text-xxs",
      "Body Text - Medium": "text-base",
      "Body Text - Large": "text-xl",
      "Body Text - Regular": "text-lg",
      "Body Text - Small": "text-md",
      "Body Text - Extra Small": "text-sm",
    };
    return `<${tag} class="${fontType[type]} ${fontWeight} text-[${color}]">${label}</${tag}>`;
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "Display 1",
        "Display 2",
        "Display 3",
        "Display 4",
        "Display 5",
        "Heading 1",
        "Heading 2",
        "Heading 3",
        "Heading 4",
        "Heading 5",
        "Heading 6",
        "Body Text - Medium",
        "Body Text - Large",
        "Body Text - Regular",
        "Body Text - Small",
        "Body Text - Extra Small",
      ],
      description:
        "Select the size/type of the typography (Display, Heading, or Body Text).",
      table: {
        defaultValue: { summary: "Display 1" },
      },
    },
    fontWeight: {
      control: { type: "select" },
      options: [
        "font-light",
        "font-normal",
        "font-semibold",
        "font-medium",
        "font-bold",
        "font-black",
      ],
      description: "Choose the font weight of the text.",
      table: {
        defaultValue: { summary: "font-normal" },
      },
    },
    label: {
      control: "text",
      description: "The text content that will be displayed.",
      table: {
        defaultValue: { summary: "Heading" },
      },
    },
    color: {
      control: {
        type: "color",
      },
      description: "Select the color of the text.",
      table: {
        defaultValue: { summary: "#0657AB" },
      },
    },
    tag: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "p"],
      description: "HTML tag used for the text element.",
      table: {
        defaultValue: { summary: "h1" },
      },
    },
  },
  args: {
    type: "Display 1",
    fontWeight: "font-normal",
    label: "Heading",
    color: "text-black",
    tag: "h1",
  },
};

// Individual Variants
export const Display1 = {
  args: {
    type: "Display 1",
    label: "Display Heading 1",
  },
};

export const Display2 = {
  args: {
    type: "Display 2",
    label: "Display Heading 2",
  },
};

export const Display3 = {
  args: {
    type: "Display 3",
    label: "Display Heading 3",
  },
};

export const Display4 = {
  args: {
    type: "Display 4",
    label: "Display Heading 4",
  },
};

export const Display5 = {
  args: {
    type: "Display 5",
    label: "Display Heading 5",
  },
};

export const Heading1 = {
  args: {
    type: "Heading 1",
    label: "Heading 1",
  },
};

export const Heading2 = {
  args: {
    type: "Heading 2",
    label: "Heading 2",
  },
};

export const Heading3 = {
  args: {
    type: "Heading 3",
    label: "Heading 3",
  },
};

export const Heading4 = {
  args: {
    type: "Heading 4",
    label: "Heading 4",
  },
};

export const Heading5 = {
  args: {
    type: "Heading 5",
    label: "Heading 5",
  },
};

export const Heading6 = {
  args: {
    type: "Heading 6",
    label: "Heading 6",
  },
};

export const BodyTextMedium = {
  args: {
    type: "Body Text - Medium",
    label: "Body Text - Medium",
    tag: "p",
  },
};

export const BodyTextLarge = {
  args: {
    type: "Body Text - Large",
    label: "Body Text - Large",
    tag: "p",
  },
};

export const BodyTextRegular = {
  args: {
    type: "Body Text - Regular",
    label: "Body Text - Regular",
    tag: "p",
  },
};

export const BodyTextSmall = {
  args: {
    type: "Body Text - Small",
    label: "Body Text - Small",
    tag: "p",
  },
};

export const BodyTextExtraSmall = {
  args: {
    type: "Body Text - Extra Small",
    label: "Body Text - Extra Small",
    tag: "p",
  },
};

// Combined Variants

// export const AllDisplayVariants = () => `
//   <div>
//     <h1 class="text-6xl font-bold text-black">Display Heading 1</h1>
//     <h2 class="text-5xl font-bold text-black">Display Heading 2</h2>
//     <h3 class="text-4xl font-bold text-black">Display Heading 3</h3>
//     <h4 class="text-3xl font-bold text-black">Display Heading 4</h4>
//     <h5 class="text-2xl font-bold text-black">Display Heading 5</h5>
//   </div>
// `;

// export const AllHeadingVariants = () => `
//   <div>
//     <h1 class="text-xl font-bold text-black">Heading 1</h1>
//     <h2 class="text-lg font-bold text-black">Heading 2</h2>
//     <h3 class="text-md font-bold text-black">Heading 3</h3>
//     <h4 class="text-sm font-bold text-black">Heading 4</h4>
//     <h5 class="text-xs font-bold text-black">Heading 5</h5>
//     <h6 class="text-xxs font-bold text-black">Heading 6</h6>
//   </div>
// `;

// export const AllBodyTextVariants = () => `
//   <div>
//     <p class="text-base font-normal text-black">Body Text - Medium</p>
//     <p class="text-xl font-normal text-black">Body Text - Large</p>
//     <p class="text-lg font-normal text-black">Body Text - Regular</p>
//     <p class="text-md font-normal text-black">Body Text - Small</p>
//     <p class="text-sm font-normal text-black">Body Text - Extra Small</p>
//   </div>
// `;
