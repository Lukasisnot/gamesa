import { Vector2 } from "./math.js";

export class Entity {
    constructor(path, pos = new Vector2(0, 0)) {
        this.img = new Image();
        this.img.src = path;
        this.position = pos;
        this.ratio = new Vector2(1, 1);
        this.size = new Vector2(this.img.width, this.img.height);
        this.rotation = 0;
    }

    draw(ctx) {
        let ctxTranslation = new Vector2(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);
        ctx.translate(ctxTranslation.x, ctxTranslation.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img, -this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
        ctx.rotate(-this.rotation);
        ctx.translate(-ctxTranslation.x, -ctxTranslation.y);    
    }

    setSize(size = new Vector2(1, 1)) {
        this.size = new Vector2(this.img.width * size.x, this.img.height * size.y);
    }
}