let content = document.getElementById("dynamic_content")

export function setupGameForPlayer1() {

    let rock = document.createElement("div");
    let paper = document.createElement("div");
    let scissors = document.createElement("div");
    
    
    rock.innerText = "ROCK";
    paper.innerText = "PAPER";
    scissors.innerText = "SCISSORS";
    
    rock.setAttribute("id", "rock")
    paper.setAttribute("id", "paper")
    scissors.setAttribute("id", "scissors")

    rock.setAttribute("class", "choices")
    paper.setAttribute("class", "choices")
    scissors.setAttribute("class", "choices")
    
    
    rock.addEventListener( "click", () => {
    rock.setAttribute("class", "animate")
    })
    paper.addEventListener( "click", () => {
    paper.setAttribute("class", "animate")
    })
    scissors.addEventListener( "click", () => {
    scissors.setAttribute("class", "animate")
    })
    
    content.appendChild(rock);
    content.appendChild(paper);
    content.appendChild(scissors);
    
    }
export function setupGameForPlayer2() {

    let rock2 = document.createElement("div");
    let paper2 = document.createElement("div");
    let scissors2 = document.createElement("div");
    
    
    rock2.innerText = "ROCK2";
    paper2.innerText = "PAPER2";
    scissors2.innerText = "SCISSORS2";
    
    rock2.setAttribute("id", "rock2")
    paper2.setAttribute("id", "paper2")
    scissors2.setAttribute("id", "scissors2")

    rock2.setAttribute("class", "choices2")
    paper2.setAttribute("class", "choices2")
    scissors2.setAttribute("class", "choices2")
    
    
    rock2.addEventListener( "click", () => {
    rock2.setAttribute("class", "animate2")
    })
    paper2.addEventListener( "click", () => {
    paper2.setAttribute("class", "animate2")
    })
    scissors2.addEventListener( "click", () => {
    scissors2.setAttribute("class", "animate2")
    })
    
    content.appendChild(rock2);
    content.appendChild(paper2);
    content.appendChild(scissors2);
    
    }
    