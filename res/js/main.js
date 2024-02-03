import { Background } from "./ui/background.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Background();

const keys = {};

let lastTick = performance.now();
let deltaTime;

document.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

const gameLoop = (now) => {

    resizeCanvas();

    clearCanvas();

    update();

    render();

    calcDeltaTime(now);

    window.requestAnimationFrame(gameLoop);
};

window.onload = async () => {
    window.requestAnimationFrame(gameLoop);
};

const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
};

const clearCanvas = () => {
    background.draw(ctx);
};

const update = () => {
    
};

const render = () => {

};

const calcDeltaTime = (now) => {
    deltaTime = now - lastTick;
    lastTick = now;
};