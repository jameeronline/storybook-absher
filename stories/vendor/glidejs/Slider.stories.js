import { createSlider } from "./Slider";

export default {
  title: "Vendor / Glide JS",
  tags: ["autodocs"],
  render: (args) => {
    const container = document.createElement("div");

    // Clear any previous slider instance by removing existing elements
    container.innerHTML = "";

    // Create the new slider and append it to the container
    const slider = createSlider(args);
    container.appendChild(slider);

    return container;
  },
  argTypes: {
    autoplay: {
      control: { type: "boolean" },
      defaultValue: true,
      description: "Whether the carousel should autoplay.",
    },
    animationDuration: {
      control: { type: "number" },
      defaultValue: 3000,
      description: "Duration of the slide transition in milliseconds.",
    },
    items: {
      control: { type: "array" },
      defaultValue: ["Slide 1", "Slide 2", "Slide 3"],
      description: "The items to display in the slider.",
    },
  },
  args: {
    autoplay: true,
    animationDuration: 3000,
    items: [
      "Simply beautify will pretty print any HTML, CSS Javascript, or JSON and it works in both browser and Node.js environments!",
      "Simply beautify will pretty print any HTML, CSS Javascript, or JSON and it works in both browser and Node.js environments!",
      "Simply beautify will pretty print any HTML, CSS Javascript, or JSON and it works in both browser and Node.js environments!",
    ],
  },
};

// Variants
export const BasicSlider = {
  args: {
    autoplay: true,
    animationDuration: 1000,
  },
};

export const AutoplaySlider = {
  args: {
    autoplay: true,
    animationDuration: 3000,
  },
};
