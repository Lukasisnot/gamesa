import { Vector2 } from "./math.js";

export class Entity {
    constructor(path, pos = new Vector2(0, 0), size = new Vector2(1, 1)) {
        this.img = new Image();
        this.img.src = path;
        this.position = pos;
        this.size = new Vector2(this.img.width * size.x, this.img.height * size.y);
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.size.x, this.size.y);
    }
}