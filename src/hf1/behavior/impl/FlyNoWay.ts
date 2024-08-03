import { IFlyBehavior } from "../IFlyBehavior";

export class FlyNoWay implements IFlyBehavior {
    fly() {
        console.log("不会飞");
    }
}