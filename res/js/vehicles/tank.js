import { Entity } from "../entity.js";
import { Vector2 } from "../math.js";

export class Tank extends Entity {
    constructor(speed, hp, dmg) {
        super("./res/img/JpzE100.png");
        this.speed = speed;
        this.maxHP = hp;
        this.dmg = dmg;
        this.moveToPos = new Vector2(0, 0);
        this.offsetToleration = 3;
    }
    
    update(deltaTime = 1) {
        this.moveToPos = Vector2.add(this.moveToPos, new Vector2(this.img.width * -0.5, this.img.height * -0.5));
        let currentPos = new Vector2(this.position.x, this.position.y);
        let dir = Vector2.normalize(Vector2.sub(this.moveToPos, currentPos));
        let velocity = Vector2.scale(dir, this.speed * deltaTime / 100);

        let offset = Vector2.length(Vector2.sub(this.position, this.moveToPos));
        if (offset > this.offsetToleration)
            this.position = new Vector2(this.position.x + velocity.x, this.position.y + velocity.y);
    }

    moveTo(pos = new Vector2(0, 0)) {
        this.moveToPos = pos;
    }
}