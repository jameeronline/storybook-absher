import { createSlider } from "./Slider";

export default {
  title: "Vendor / Glide JS",
  tags: ["autodocs"],
  render: (args) => {
    const container = document.createElement("div");
    container.classList.add("test-slider");

    // Clear any previous slider instance by removing existing elements
    container.innerHTML = "";

    // Create the new slider and append it to the container
    const slider = createSlider(args);
    container.appendChild(slider);

    return container;
  },
  parameters: {
    docs: {
      source: {},
    },
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
      "<img src='https://picsum.photos/id/237/1000/300' alt='' />",
      "<img src='https://picsum.photos/id/227/1000/300' alt='' />",
      "<img src='https://picsum.photos/id/217/1000/300' alt='' />",
      "<img src='https://picsum.photos/id/247/1000/300' alt='' />",
      "<img src='https://picsum.photos/id/257/1000/300' alt='' />",
    ],
  },
};

export const Default = {
  args: {
    autoplay: true,
    animationDuration: 3000,
    items: [
      "<img src='https://picsum.photos/id/237/1000/300' alt='' />",
      "<img src='https://picsum.photos/id/227/1000/300' alt='' />",
      "<img src='https://picsum.photos/id/217/1000/300' alt='' />",
      "<img src='https://picsum.photos/id/247/1000/300' alt='' />",
      "<img src='https://picsum.photos/id/257/1000/300' alt='' />",
    ],
  },
};

export const BasicSlider = {
  args: {
    autoplay: false,
    items: [
      "Simple image Slider: Glide.js is a dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more",
      "Simple image Slider: Glide.js is a dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more",
      "Simple image Slider: Glide.js is a dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more",
    ],
  },
};

export const AutoplaySlider = {
  args: {
    autoplay: true,
    animationDuration: 3000,
  },
};
