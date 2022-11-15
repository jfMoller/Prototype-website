import { Choice } from "./choice.js";
import { Position } from "./entity.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
export const width = canvas.width;
export const height = canvas.height;

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.entities = [
      new Choice(new Position(width * 0.25, height)),
      new Choice(new Position(width * 0.75, height)),
    ];
    this.player = this.entities[0];
    this.computer = this.entities[1];
    this.index = null;
  }
  run() {
    render();
  }
}

let game = new Game(canvas, context);
game.run();

function render() {
    context.clearRect(0, 0, width, height);

    for (game.index = 0; game.index < game.entities.length; ++game.index) {
      let entity = game.entities[game.index];
      entity.draw(context);
      entity.animate(game, context);
    }

    requestAnimationFrame(render);
  }