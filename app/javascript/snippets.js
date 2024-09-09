document.addEventListener("turbo:load", function () {
  const copyButtons = document.querySelectorAll("[data-copy-button]");

  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const codeElement = this.closest(".relative").querySelector("code");
      navigator.clipboard
        .writeText(codeElement.textContent)
        .then(() => {
          // Optional: Show a "Copied!" message
          alert("Code copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    });
  });
});
