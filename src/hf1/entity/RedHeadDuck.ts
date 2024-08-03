import { Duck } from "../parent/Duck";
import { FlyNoWay } from "../behavior/impl/FlyNoWay";
import { MuteQuack } from "../behavior/impl/MuteQuack";

export class RedHeadDuck extends Duck {
    constructor() {
        super();
        this.setFlyBehavior(new FlyNoWay());
        this.setQuackBehavior(new MuteQuack());
    }

    display() {
        console.log("外观是红头鸭子");
    }
}
