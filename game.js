let content = document.getElementById("dynamic_container")


let left = document.createElement("div")
left.setAttribute("id", "left")
left.innerText = "player"

let middle = document.createElement("div")
middle.setAttribute("id", "middle")

let right = document.createElement("div")
right.setAttribute("id", "right")
right.innerText = "computer"

let arena = document.createElement("div");
arena.setAttribute("id", "arena")



export function setupGameForPlayer1() {

    content.appendChild(left);

    
    let rock = document.createElement("div");
    let paper = document.createElement("div");
    let scissors = document.createElement("div");
    
   
    
    rock.innerText = "ROCK";
    paper.innerText = "PAPER";
    scissors.innerText = "SCISS";
    
    rock.setAttribute("id", "rock")
    paper.setAttribute("id", "paper")
    scissors.setAttribute("id", "scissors")

    
    
    rock.addEventListener( "click", () => {
    rock.setAttribute("class", "animate")
    })
    paper.addEventListener( "click", () => {
    paper.setAttribute("class", "animate")
    })
    scissors.addEventListener( "click", () => {
    scissors.setAttribute("class", "animate")
    })
    
    left.appendChild(rock);
    left.appendChild(paper);
    left.appendChild(scissors);
    
    }
    
export function setupGameForPlayer2() {

    
content.appendChild(right);

    let rock2 = document.createElement("div");
    let paper2 = document.createElement("div");
    let scissors2 = document.createElement("div");
    
    
    rock2.innerText = "ROCK2";
    paper2.innerText = "PAPER2";
    scissors2.innerText = "SCISS2";
    
    rock2.setAttribute("id", "rock2")
    paper2.setAttribute("id", "paper2")
    scissors2.setAttribute("id", "scissors2")


    
    
    rock2.addEventListener( "click", () => {
    rock2.setAttribute("class", "animate2")
    })
    paper2.addEventListener( "click", () => {
    paper2.setAttribute("class", "animate2")
    })
    scissors2.addEventListener( "click", () => {
    scissors2.setAttribute("class", "animate2")
    })
    
    right.appendChild(rock2);
    right.appendChild(paper2);
    right.appendChild(scissors2);
    
    }

    export function setupArena() {
        content.appendChild(middle);
        middle.appendChild(arena);
    
    }
