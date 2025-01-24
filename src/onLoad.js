export default function onLoad(modelViewer) {
  modelViewer.addEventListener("load", async () => {
    // basic material setup

    const ritasColor = "#b9d1db";
    const { materials } = modelViewer.model;
    modelViewer.timeScale = 0.15;

    materials[1].pbrMetallicRoughness.setBaseColorFactor(ritasColor);
    materials[1].pbrMetallicRoughness.setRoughnessFactor(0.6);

    // interactive

    const effectComposer = document.querySelector("effect-composer");
    const effect = effectComposer.children[0];

    let clickListenerAdded = false;

    const trackMouseMovement = (event) => {
      const material = modelViewer.materialFromPoint(
        event.clientX,
        event.clientY
      );

      // Get the modelViewer element
      const modelViewerElement = modelViewer; // or document.getElementById('your-element-id')

      if (material != null) {
        effect.blendMode = "default";

        // Change cursor to pointer when hovering over the material
        modelViewerElement.style.cursor = "pointer";

        // Add the click listener only once
        if (!clickListenerAdded) {
          modelViewer.addEventListener("click", () => {
            alert("Hello World!");
          });
          clickListenerAdded = true;
        }
      } else {
        effect.blendMode = "skip";

        // Reset cursor when not hovering over a clickable material
        modelViewerElement.style.cursor = "default";
      }
    };

    document.addEventListener("mousemove", trackMouseMovement);

    // set video texture

    const videoTexture = modelViewer.createVideoTexture(
      "./assets/Alice_RitaBorralhoSilva.mp4"
    );

    const material = materials[0];

    const { baseColorTexture } = material.pbrMetallicRoughness;
    baseColorTexture.setTexture(videoTexture);

    console.log(baseColorTexture);
    // material.setEmissiveFactor(1);
    // material.setEmissiveStrength(1);
  });
}
