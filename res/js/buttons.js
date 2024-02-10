import { Entity } from "./entity.js";

// class Btn extends Entity {
//     constructor(path) {
//         super(path)
//     }
// }

export class DmgBtn extends Entity
{
    constructor() {
       super("./res/img/dmgUpgrade.PNG"); 
       this.position.x = 800;
       this.position.y = 950;
    }
   
}
export class HealBtn extends Entity
{
    constructor() {
        super("./res/img/Heal.PNG");
        this.position.x = 950;
        this.position.y = 950;
    }
}