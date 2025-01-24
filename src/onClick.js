export default function onClick() {
  const hotSpot = document.getElementById("Hotspot");
  hotSpot.addEventListener("click", () => {
    alert("You clicked the hotspot!");
  });
}
