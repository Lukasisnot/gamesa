import { Entity } from "./res/js/entity.js";
import { Vector2 } from "../math.js";

export class Tank extends Entity {
    constructor(path, speed, hp, dmg) {
        super(path);
        this.speed = speed;
        this.maxHP = hp;
        this.dmg = dmg;
    }
    
    update(deltaTime) {
        this.position = Vector2.lerp(this.position, this.moveToPos, deltaTime * .01);
        // console.log(this.position);
    }

    moveTo(pos = new Vector2(0, 0)) {
        this.moveToPos = pos;
    }
}