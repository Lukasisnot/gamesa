import { Background } from "/res/js/background.js";
import { Tank } from "/res/js/vehicles/tank.js";
import { Vector2 } from "/res/js/math.js";
import { Math } from "/res/js/math.js";

const startButton = document.getElementById("startButton");
const content = document.getElementById("content");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Background();
const tank = new Tank("/res/img/JpzE100.png");

const keys = {};
const mousePos = new Vector2(0, 0);

let lastTick = performance.now();
let deltaTime;

window.onload = () => {
    canvas.style.display = "none";
}

background.img.onload = () => {
    let w = new Vector2(32, 27);
    console.log(Vector2.normalize(w));
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
    tank.moveTo(mousePos);
    tank.update(deltaTime);
};

const render = () => {
    tank.draw(ctx);
};

const calcDeltaTime = (now) => {
    deltaTime = now - lastTick;
    lastTick = now;
};
