//tar bort alla element
export function clearChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export function isColliding(circle1, circle2) {
  let distance = Math.sqrt(
    Math.pow(circle1.position.x - circle2.position.x, 2) +
      Math.pow(circle1.position.y - circle2.position.y, 2)
  );
  if (distance <= circle1.radius + circle2.radius) {
    return true;
  } else {
    return false;
  }
}

export function addsTextToCanvas(ctx, text, fontSize, position) {
    ctx.font = fontSize.concat(" " + "Monospace");
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, position.x, position.y);
  }
