import { Background } from "./background.js";
import { Tank } from "./vehicles/tank.js";
import { Vector2 } from "./math.js";
import { DmgBtn} from "./buttons.js";
import { HealBtn} from "./buttons.js";
// import { Math } from "./res/js/math.js";


const startButton = document.getElementById("startButton");
const content = document.getElementById("content");

//canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//obrazky
const background = new Background();
const tank = new Tank(2);

const keys = {};
const mousePos = new Vector2(0, 0);

//delta time
let lastTick = performance.now();
let deltaTime;

//buttony
const dmgButton = new DmgBtn();
const healButton = new HealBtn();
window.onload = () => {
    canvas.style.display = "none";
}

startButton.onclick = () => {
    content.style.display = "none";
    canvas.style.display = "block";
    window.requestAnimationFrame(gameLoop);
};

document.addEventListener("mousemove", (event) => {
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
});

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
    const canvasBound = canvas.getBoundingClientRect();
    const ratio = new Vector2(canvas.width / canvasBound.width, canvas.height / canvasBound.height);
    tank.moveTo(new Vector2((mousePos.x - canvasBound.x) * ratio.x, (mousePos.y - canvasBound.y) * ratio.y));
    tank.update(deltaTime);
};

const render = () => {
    tank.draw(ctx);
    dmgButton.draw(ctx);
    healButton.draw(ctx);
};

const calcDeltaTime = (now) => {
    deltaTime = now - lastTick;
    lastTick = now;
};