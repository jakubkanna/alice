import "@google/model-viewer";
import "@google/model-viewer-effects";
import view from "./script.js";

// Initialize after model-viewer and effects are loaded
window.addEventListener("DOMContentLoaded", () => {
  const modelViewer = document.getElementById("alice");

  view(modelViewer);
});
