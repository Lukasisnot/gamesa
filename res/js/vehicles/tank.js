import { Entity } from "../entity.js";
import { Vector2 } from "../math.js";

export class Tank extends Entity {
    constructor(speed, hp, dmg) {
        super("./res/img/JpzE100.png");
        this.speed = speed;
        this.maxHP = hp;
        this.dmg = dmg;
        this.moveToPos = new Vector2(0, 0);
    }
    
    update(deltaTime) {
        let dir = Vector2.sub(this.moveToPos, this.position);
        let moveDir = Vector2.normalize(dir);
        let velocity = Vector2.scale(moveDir, this.speed * deltaTime);
        let move = Vector2.add(this.position, velocity);
        // console.log(this.moveToPos);
        this.position = new Vector2(500, 500);
    }

    moveTo(pos = new Vector2(0, 0)) {
        this.moveToPos = pos;
    }
}