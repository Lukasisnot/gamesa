
const startBtn = document.getElementById("startButton");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Background {
    
    constructor() {
        this.img = new Image();
        this.path = "./res/img/startImg.png";
        this.img.src = this.path;
        this.size = {
            width: 1920,
            height: 1080
        };
    }

    draw(ctx) {
      ctx.drawImage(this.img, 0, 0, this.size.width, this.size.height);
    }
    
}
const background = new Background();

window.onload = () => {
    canvas.width = 1920;
    canvas.height = 1080;
    background.draw(ctx);
};

startBtn.onclick = () => {
    window.location.href = "./game.html";
};