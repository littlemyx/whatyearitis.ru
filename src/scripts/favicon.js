import canvas from "./canvas";

let intervalFrame;
let index = 0;
let animatingText;

export const updateText = text => {
  canvas.drawText(text);
};

export const initIcon = () => {
  const link = document.createElement("link");
  document.getElementsByTagName("head")[0].appendChild(link);
};

export const updateIcon = frame => {
  const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  canvas.drawText(frame);
  link.href = canvas.getCanvas().toDataURL("image/png");
};

const updateFrame = () => {
  const frame = animatingText[index];
  updateText(frame);
  updateIcon(frame);
  index++;
  index = index % animatingText.length;
};

export const animateIcon = text => {
  animatingText = text;
  intervalFrame = setInterval(updateFrame, 1000);
};

export const cancelAnimation = () => {
  clearInterval(intervalFrame);
};
