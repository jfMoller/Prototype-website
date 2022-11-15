import { Entity, Position, Velocity } from "./entity.js";
import { height, width } from "./game.js";
import { addsTextToCanvas, isColliding } from "./utiltity.js";



class Type {
  constructor() {
    this.rock = "rock";
    this.paper = "paper";
    this.rock = "scissors";
  }
}
export class Choice extends Entity {
  constructor(position) {
    super(position);
    this.color = "gray";
    this.radius = 30;
    this.velocity = new Velocity(10, 10);
    this.type = new Type();
    this.rounds = 0;
    this.amount = 3;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  animate(game) {
    let player = game.player;
    let computer = game.computer;
//player choice
//computer choice

if (this.rounds < this.amount) {
    //move up
    if (this.position.y > height / 2) {
      this.position.y -= this.velocity.dy;
    }
    //move in and collide
    if (!isColliding(player, computer) && this.position.y === height / 2 ) {
      player.position.x += player.velocity.dx;
      computer.position.x -= computer.velocity.dx;
    }

    //winner determined, move down into position and shrink
    if (isColliding(player, computer) && this.position.y !== height + this.radius) {
        player.position.y += player.velocity.dy;
        computer.position.y += computer.velocity.dy;
    }
//create result index
if (this.rounds === 0 && isColliding(player, computer) && this.position.y === height * 0.9) {
    game.entities.push(new Result(new Position(this.position.x, this.position.y)))
}
if (this.rounds === 1 &&isColliding(player, computer) && this.position.y === height * 0.8) {
    game.entities.push(new Result(new Position(this.position.x, this.position.y)))
}
if (this.rounds === 2 && isColliding(player, computer) && this.position.y === height * 0.7) {
    game.entities.push(new Result(new Position(this.position.x, this.position.y)))
}
    //leave canvas, then return
    if (this.position.y >= height + this.radius) {
        player.rounds += 1;
        computer.rounds += 1;
        player.position.x = width * 0.25;
        computer.position.x = width * 0.75;
    }
   
}
}
}
export class Result extends Entity {
    constructor(position) {
        super(position);
        this.color = "red";
        this.radius = 30;
        this.velocity = new Velocity(1, 1);
        this.type = new Type();
      }
    
      draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      }
      animate(game, ctx) {
   if (game.entities.length >= 8 && this.position.y > height * 0.25) {
    this.position.y -= this.velocity.dy;
   }
   //winner text appears, results are spliced
if (game.entities[game.index].position.y === 150) {
    //result disappear
    game.entities[game.index].color = "rgba(0, 0, 0, 0.0"
}
if (game.entities[game.index].color === "rgba(0, 0, 0, 0.0") {
addsTextToCanvas(ctx, "TBA WINS!", "90px", new Position(width / 2, 150))
addsTextToCanvas(ctx, "x : y", "70px", new Position(width / 2, 230))
}

}

      }
    