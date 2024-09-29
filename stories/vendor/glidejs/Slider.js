import Glide from "@glidejs/glide";

// Function to create and initialize the slider
export const createSlider = ({ autoplay, animationDuration, items }) => {
  const autoplayValue = autoplay ? animationDuration : false;

  // Container for the slider
  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("glide");

  sliderContainer.innerHTML = `
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides w-full">
        ${items.map((item) => `<li class="glide__slide w-full">${item}</li>`).join("")}
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">Prev</button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
    </div>
  `;

  // Initialize Glide.js instance
  document.addEventListener("DOMContentLoaded", () => {
    const glide = new Glide(sliderContainer, {
      type: "carousel",
      autoplay: autoplayValue,
      animationDuration,
    });

    // Mount the slider
    glide.mount();
  });

  return sliderContainer;
};
