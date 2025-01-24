import onLoad from "./onLoad";
import onProgress from "./onProgress";
import onScroll from "./onScroll";

export const view = (modelViewer) => {
  if (!modelViewer) {
    console.warn("Required elements (model-viewer) are missing.");
    return;
  }

  onProgress(modelViewer);
  onLoad(modelViewer);
  onScroll(modelViewer);
};

export default view;
