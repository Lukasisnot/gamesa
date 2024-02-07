import { Entity } from "/res/js/entity.js";
import { Vector2 } from "../math.js";

export class Tank extends Entity {
    constructor(path, speed, hp, dmg) {
        super(path);
        this.speed = speed;
        this.maxHP = hp;
        this.dmg = dmg;
    }
    
    update(deltaTime) {
        let lerpPos = Vector2.lerp(this.pos, this.moveToPos, deltaTime);
        this.position = lerpPos;
        console.log(this.position);
    }

    moveTo(pos = new Vector2(0, 0)) {
        this.moveToPos = pos;
    }
}