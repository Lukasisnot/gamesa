import { Background } from "/res/js/background.js";
import { Tank } from "/res/js/vehicles/tank.js";
import { Vector2 } from "/res/js/math.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Background();
const tank = new Tank("/res/img/JpzE100.png");

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

const resizeCanvas = () => {
    canvas.width = 1920;
    canvas.height = 1080;
};

const clearCanvas =  () => {
    background.draw(ctx);
};

const update = () => {
    tank.moveTo()
    tank.update(deltaTime);
};

const render = () => {
    tank.draw(ctx);
};

const calcDeltaTime = (now) => {
    deltaTime = now - lastTick;
    lastTick = now;
};

window.onload = () => {
    window.requestAnimationFrame(gameLoop);
};