import { clearChildren } from "./utiltity.js"
import { setupGameForPlayer1, setupGameForPlayer2, setupArena } from "./game.js"
 
let content = document.getElementById("dynamic_container")

function setupMenu() {


let start_button = document.createElement("div");


start_button.innerText = "START GAME";


start_button.setAttribute("id", "start_button")



start_button.addEventListener( "click", () => {
startGame();
})

content.appendChild(start_button);


}
setupMenu();

function startGame() {
clearChildren(content);
setupGameForPlayer1();
setupArena();
setupGameForPlayer2();
}
