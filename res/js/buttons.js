import { Entity } from "./entity.js";
import { Vector2 } from "./math.js";

class Btn extends Entity {
    constructor(path) {
        super(path)
    }
}

export class DmgBtn extends Btn
{
    constructor() {
       super("./res/img/dmgUpgrade.png"); 
       this.position.x = 200;
       this.position.y = 900;
    }
   
}
export class HealBtn extends Btn
{
    constructor() {
        super("./res/img/Heal.png"); 
        this.position.x = 400;
        this.position.y = 900;
    }
}