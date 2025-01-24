import onClick from "./onClick";
import onLoad from "./onLoad";
import onProgress from "./onProgress";
import onScroll from "./onScroll";

export const controller = (modelViewer) => {
  onProgress(modelViewer);
  onLoad(modelViewer);
  onScroll(modelViewer);
  onClick();
};

export default controller;
