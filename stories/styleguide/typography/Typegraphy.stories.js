export default {
  title: "StyleGuide / Typography / Heading",
  tags: ["autodocs"],
  render: ({ label, type, fontWeight, color, as, customColor }) => {
    const fontType = {
      "Display 1": "text-9xl",
      "Display 2": "text-8xl",
      "Display 3": "text-7xl",
      "Display 4": "text-6xl",
      "Display 5": "text-5xl",
      "Heading 1": "text-4xl",
      "Heading 2": "text-3xl",
      "Heading 3": "text-2xl",
      "Heading 4": "text-xl",
      "Heading 5": "text-lg",
      "Heading 6": "text-base",
      "Body Text - Large": "text-lg",
      "Body Text - Regular": "text-base",
      "Body Text - Medium": "text-md",
      "Body Text - Small": "text-sm",
      "Body Text - Extra Small": "text-xs",
    };

    const fontColor = {
      primary: "text-primary-500",
      secondary: "text-secondary-500",
      danger: "text-danger-500",
      success: "text-success-500",
      warning: "text-warning-500",
      info: "text-info-500",
    };

    // Assign the appropriate HTML tag based on the type
    if (type.startsWith("Display")) {
      as = "h1";
    } else if (type.startsWith("Heading")) {
      as = `h${type.split(" ")[1]}`;
    } else {
      as = "p";
    }

    //text custom color
    const textColor = `text-[${customColor}]`;

    return `<${as} class="${fontType[type]} ${fontWeight} ${textColor}">${label}</${as}>`;
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
        "Body Text - Large",
        "Body Text - Medium",
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
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "warning", "info", "success"],
      description: "Select the color variant for the text.",
      table: {
        defaultValue: { summary: "text-primary" },
      },
    },
    customColor: {
      control: "color",
      table: {
        defaultValue: { summary: "#003b20" },
      },
    },
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
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
    color: "text-primary",
    as: "h1",
  },
};

// Individual Variants
export const Display1 = {
  args: {
    type: "Display 1",
    label: "Display 1",
  },
};

export const Display2 = {
  args: {
    type: "Display 2",
    label: "Display 2",
  },
};

export const Display3 = {
  args: {
    type: "Display 3",
    label: "Display 3",
  },
};

export const Display4 = {
  args: {
    type: "Display 4",
    label: "Display 4",
  },
};

export const Display5 = {
  args: {
    type: "Display 5",
    label: "Display 5",
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
    as: "p",
  },
};

export const BodyTextLarge = {
  args: {
    type: "Body Text - Large",
    label: "Body Text - Large",
    as: "p",
  },
};

export const BodyTextRegular = {
  args: {
    type: "Body Text - Regular",
    label: "Body Text - Regular",
    as: "p",
  },
};

export const BodyTextSmall = {
  args: {
    type: "Body Text - Small",
    label: "Body Text - Small",
    as: "p",
  },
};

export const BodyTextExtraSmall = {
  args: {
    type: "Body Text - Extra Small",
    label: "Body Text - Extra Small",
    as: "p",
  },
};
