// Handles loading events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");

  if (!progressBar || !updatingBar) return;

  const progress = event.detail.totalProgress;
  updatingBar.style.width = `${progress * 100}%`;

  if (progress === 1) {
    progressBar.classList.add("hide");
    event.target.removeEventListener("progress", onProgress);
  } else {
    progressBar.classList.remove("hide");
  }
};

// Initialize <model-viewer> and buttons
document.addEventListener("DOMContentLoaded", () => {
  const modelViewer = document.getElementById("alice");
  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");

  if (!modelViewer || !playButton || !pauseButton) {
    console.warn("Required elements (model-viewer or buttons) are missing.");
    return;
  }

  // Attach progress event listener
  modelViewer.addEventListener("progress", onProgress);

  // Play button event
  playButton.addEventListener("click", async () => {
    modelViewer.play();
  });

  // Pause button event
  pauseButton.addEventListener("click", async () => {
    modelViewer.pause();
  });

  // Change the default material once the model is loaded
  modelViewer.addEventListener("load", () => {
    const ritasColor = "#b9d1db";
    const materials = modelViewer.model.materials;

    materials.forEach((material) => {
      material.name == "Default" &&
        material.pbrMetallicRoughness.setBaseColorFactor(ritasColor);
      material.pbrMetallicRoughness.setRoughnessFactor(0.6);
    });
  });
});
