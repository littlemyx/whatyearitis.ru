const canvas = document.createElement("canvas");
canvas.width = 32;
canvas.height = 32;
canvas.style.display = "none";

document.body.append(canvas);

let sequence = [];

export const getCanvas = () => canvas;

export const clearSequence = () => {
  sequence = [];
};

export const addToSequence = element => {
  sequence.push(element);
};

export const drawText = text => {
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, 32, 32);

  // ctx.fillStyle = "green";
  // ctx.fillRect(0, 0, 32, 32);

  ctx.font = "40px sans-serif";
  ctx.fillText(text, 10, 30);

  // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  // ctx.fillRect(30, 30, 50, 50);
};
