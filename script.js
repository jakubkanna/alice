const modelViewer = document.getElementById("alice");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

// Handles loading events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");

  if (!progressBar || !updatingBar) return;

  const progress = event.detail.totalProgress;
  updatingBar.style.width = `${progress * 100}%`;

  // Hide progress bar and remove event listener when loading is complete
  if (progress === 1) {
    progressBar.classList.add("hide");
    event.target.removeEventListener("progress", onProgress);
  } else {
    progressBar.classList.remove("hide");
  }
};

const onStart = () => {
  modelViewer.animationName = "Plane.003_final.001Action.003";
  modelViewer.currentTime = 0;
};

const onStop = () => {
  modelViewer.animationName = "rotation";
};

// Initialize <model-viewer> and buttons
document.addEventListener("DOMContentLoaded", () => {
  if (!modelViewer) {
    console.warn("Required elements (model-viewer) are missing.");
    return;
  }

  // Attach progress event listener
  modelViewer.addEventListener("progress", onProgress);

  // Change the default material once the model is loaded
  modelViewer.addEventListener("load", () => {
    const ritasColor = "#b9d1db";
    const { materials } = modelViewer.model;
    modelViewer.timeScale = 0.25;

    materials.forEach((material) => {
      if (material.name === "Default") {
        material.pbrMetallicRoughness.setBaseColorFactor(ritasColor);
        material.pbrMetallicRoughness.setRoughnessFactor(0.6);
      }
    });
  });

  // scroll events

  let hasLogged = false; // Flag to ensure 'bang' is logged only once

  window.addEventListener("scroll", () => {
    // Get the current scroll position
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // Get the viewport height in pixels (100dvh is 100% of the viewport height)
    const viewportHeight = window.innerHeight;
    const breakpoint = viewportHeight / 100;

    // Check if the scroll position is equal to or greater than 100dvh and 'bang' hasn't been logged yet
    if (scrollTop >= breakpoint && !hasLogged) {
      document.getElementById("model").classList.add("blur");
      hasLogged = true; // Set the flag to true after logging
      onStart();
    } else if (scrollTop < breakpoint && hasLogged) {
      document.getElementById("model").classList.remove("blur");
      hasLogged = false; // Reset the flag to false
      onStop();
    }
  });
});
