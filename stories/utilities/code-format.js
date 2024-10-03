import beautify from "simply-beautiful";

// Create a function that formats the HTML
export const formatHtml = (html) => {
  var options = {
    indent_size: 2, // Indentation size (space characters)
    indent_char: " ", // Character used for indentation
    max_preserve_newlines: 1, // Number of newlines to preserve in the output
    wrap_line_length: 0, // No wrapping of lines
    unformatted: [], // No tags will be excluded from formatting
    preserve_newlines: true, // Preserve existing newlines
    end_with_newline: true, // Add a newline at the end of the output
    indent_inner_html: true, // Indent <head> and <body> sections
    extra_liners: ["div", "p", "span"], // Force these tags to start on a new line
  };

  // Format the HTML using beautify
  let formattedHtml = beautify.html(html, options);

  // Use a regex to find 'class' attributes and remove double spaces
  formattedHtml = formattedHtml.replace(
    /class="([^"]*)"/g,
    (match, classContent) => {
      // Replace multiple spaces with a single space inside the class attribute
      const cleanedClass = classContent.replace(/\s+/g, " ").trim();
      return `class="${cleanedClass}"`;
    },
  );

  return formattedHtml;
};

// Utility function to convert HTMLElement to string if necessary
export const getFormattedHtml = (storyOutput) => {
  let htmlOutput;

  // Check if the storyOutput is an HTMLElement
  if (storyOutput instanceof HTMLElement) {
    htmlOutput = storyOutput.outerHTML; // Convert HTMLElement to string
  } else {
    htmlOutput = storyOutput.toString(); // Treat it as a string if not HTMLElement
  }

  return formatHtml(htmlOutput); // Format the HTML string
};
