// createCheckbox.js
import beautify from "simply-beautiful";

// Create a function that formats the HTML
export const formatHtml = (html) => {
  var options = {
    indent_size: 4,
    space_before_conditional: false,
    jslint_happy: true,
    max_char: 0,
  };

  console.log("beautify.html(html, options");

  return beautify.html(html, options);
};
