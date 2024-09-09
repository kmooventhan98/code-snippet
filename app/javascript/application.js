import "snippets";

function copyToClipboard() {
  // Copy the text to the clipboard
  navigator.clipboard.writeText("<%= snippet.code %>").then(function () {
    // Hide the copy icon and show the success icon
    document.getElementById("default-icon").classList.add("hidden");
    document.getElementById("success-icon").classList.remove("hidden");

    // After 2 seconds, reset the icons
    setTimeout(function () {
      document.getElementById("default-icon").classList.remove("hidden");
      document.getElementById("success-icon").classList.add("hidden");
    }, 2000);
  });
}
