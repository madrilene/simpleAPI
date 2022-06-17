//  get UI elements
const ideaUi = document.querySelector("#ideaElement");
const pUi = document.createElement("p");
ideaUi.append(pUi);
const buttonUi = document.querySelector("#triggerIdea");
const simley = document.querySelector("#smiley");
// array for random smileys to be included before idea
const goodOrBad = ["😅", "😍", "😐", "😖", "😨", "😴", "🤔", "😎"];

// initial text textContent for idea-space and initial smiley
pUi.textContent = "Click to geht an idea";
simley.textContent = "😀";

// helper function for randomly looping through array items
function randomItems(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// on click get api response
buttonUi.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      pUi.textContent = data.activity;
      simley.textContent = randomItems(goodOrBad);
    });
});
