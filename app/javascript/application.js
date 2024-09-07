// app/javascript/application.js

// Importing libraries if needed (e.g., jQuery or Select2)
// For example, if you're using jQuery with Importmaps
import "jquery";
import "select2";

// Initialize Select2
document.addEventListener("turbo:load", function () {
  $(".select2").select2({
    tags: true,
    tokenSeparators: [","],
    placeholder: "Select or create tags",
    createTag: function (params) {
      let term = $.trim(params.term);
      if (term === "") {
        return null;
      }
      return {
        id: term,
        text: term,
        newTag: true,
      };
    },
  });
});
