/* let gameArea = document.getElementById("game_screen")

function setupMenu() {
let computer = document.createElement("div");
let player = document.createElement("div");

computer.innerText = "VS Computer";
player.innerText = "VS Player";

computer.classList.add("menu-choice");
player.classList.add("menu-choice");

computer.addEventListener( "click", () => {
setupGame();
})

gameArea.appendChild(computer);
gameArea.appendChild(player);
}
setupMenu();

function setupGame() {
clearChildren(gameArea);
}

//tar bort alla element
function clearChildren(node) {
while(node.firstChild) {
node.removeChild(node.firstChild)
}
} */