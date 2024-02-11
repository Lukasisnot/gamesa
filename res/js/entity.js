import { Vector2 } from "./math.js";

export class Entity {
    constructor(path, pos = new Vector2(0, 0), size = new Vector2(1, 1)) {
        this.img = new Image();
        this.img.src = path;
        this.position = pos;
        this.size = new Vector2(this.img.width * size.x, this.img.height * size.y);
        this.rotation = 0;
    }

    draw(ctx) {
        let ctxTranslation = new Vector2(this.position.x + this.img.width / 2, this.position.y + this.img.height / 2);
        ctx.translate(ctxTranslation.x, ctxTranslation.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2, this.size.x, this.size.y);
        ctx.rotate(-this.rotation);
        ctx.translate(-ctxTranslation.x, -ctxTranslation.y);    
    }
}