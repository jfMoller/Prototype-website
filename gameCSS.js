let content = document.getElementById("dynamic_content")

export function setupGame() {

    let rock = document.createElement("div");
    let paper = document.createElement("div");
    let scissors = document.createElement("div");
    
    
    rock.innerText = "ROCK";
    paper.innerText = "PAPER";
    scissors.innerText = "SCISSORS";
    
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
    
    content.appendChild(rock);
    content.appendChild(paper);
    content.appendChild(scissors);
    
    }
    