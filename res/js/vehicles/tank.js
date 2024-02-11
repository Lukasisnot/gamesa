import { Entity } from "../entity.js";
import { Vector2 } from "../math.js";

export class Tank extends Entity {
    constructor(speed, hp, dmg) {
        super("./res/img/JpzE100.png");
        this.speed = speed;
        this.maxHP = hp;
        this.dmg = dmg;
        this.moveToPos = new Vector2(0, 0);
        this.offsetToleration = 10;
    }
    
    update(deltaTime = 1) {
        this.moveToPos = Vector2.add(this.moveToPos, new Vector2(this.size.x * -0.5, this.size.y * -0.5));
        let currentPos = new Vector2(this.position.x, this.position.y);
        let dir = Vector2.normalize(Vector2.sub(this.moveToPos, currentPos));
        let velocity = Vector2.scale(dir, this.speed * deltaTime / 100);
        
        this.rotation = Math.atan2(dir.y, dir.x) + Math.PI / 2;

        let offset = Vector2.length(Vector2.sub(this.moveToPos, currentPos));
        if (offset > this.offsetToleration)
            this.position = new Vector2(this.position.x + velocity.x, this.position.y + velocity.y);
    }

    moveTo(pos = new Vector2(0, 0)) {
        this.moveToPos = pos;
    }
}