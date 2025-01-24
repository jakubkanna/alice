const onProgress = (modelViewer) => {
  const progress = (e) => {
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

  modelViewer.addEventListener("progress", progress);
};
export default onProgress;
