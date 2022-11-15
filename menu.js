import { clearChildren } from "./utiltity.js"

let content = document.getElementById("dynamic_content")
let canvas = null;

function setupMenu() {
let startButton = document.createElement("div");


startButton.innerText = "START GAME";


startButton.setAttribute("id", "start_button")


startButton.addEventListener( "click", () => {
setupGame();
})

content.appendChild(startButton);

}
setupMenu();

function setupGame() {
clearChildren(content);
window.location.href = "game.html";
}
