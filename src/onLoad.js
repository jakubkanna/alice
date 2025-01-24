export default function onLoad(modelViewer) {
  modelViewer.addEventListener("load", async () => {
    // basic material setup

    const ritasColor = "#b9d1db";
    const { materials } = modelViewer.model;
    modelViewer.timeScale = 0.15;

    materials[1].pbrMetallicRoughness.setBaseColorFactor(ritasColor);
    materials[1].pbrMetallicRoughness.setRoughnessFactor(0.6);

    // set video texture
    const videoTexture = modelViewer.createVideoTexture(
      "/alice/assets/Alice_RitaBorralhoSilva.mp4"
    );

    const material = materials[0];

    const { baseColorTexture } = material.pbrMetallicRoughness;
    baseColorTexture.setTexture(videoTexture);

    console.log(baseColorTexture);
    // material.setEmissiveFactor(1);
    // material.setEmissiveStrength(1);
  });
}
