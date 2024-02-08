import { Entity } from "../entity.js";
import { Vector2 } from "../math.js";

export class Tank extends Entity {
    constructor(speed, hp, dmg) {
        super("./res/img/JpzE100.png");
        this.speed = speed;
        this.maxHP = hp;
        this.dmg = dmg;
    }
    
    update(deltaTime) {
        // console.log(this.position);
    }

    moveTo(pos = new Vector2(0, 0)) {
        this.moveToPos = pos;
    }
}