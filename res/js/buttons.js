import { Entity } from "./entity.js";
import { Vector2 } from "./math.js";

// class Btn extends Entity {
//     constructor(path) {
//         super(path)
//     }
// }

export class DmgBtn extends Entity
{
    constructor() {
       super("./res/img/dmgUpgrade.PNG"); 
    }
   
}
export class HealBtn extends Entity
{
    constructor() {
        super("./res/img/Heal.PNG");
    }
}