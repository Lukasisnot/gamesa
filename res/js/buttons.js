import { Entity } from "./entity.js";

class Btn extends Entity {
    constructor(path) {
        super(path)
    }
}

export class DmgBtn extends Btn
{
    constructor() {
       super("./res/img/dmgUpgrade.png"); 
       this.position.x = 800;
       this.position.y = 950;
    }
   
}
export class HealBtn extends Btn
{
    constructor() {
        super("./res/img/Heal.png"); 
        this.position.x = 950;
        this.position.y = 950;
    }
}