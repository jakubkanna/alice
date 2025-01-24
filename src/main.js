import "@google/model-viewer";
import "@google/model-viewer-effects";
import controller from "./controller.js";
import "./styles.css";
// Initialize after model-viewer and effects are loaded
window.addEventListener("DOMContentLoaded", () => {
  const modelViewer = document.getElementById("alice");

  controller(modelViewer);
});
