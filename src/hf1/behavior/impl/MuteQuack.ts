import { IQuackBehavior } from "../IQuackBehavior";

export class MuteQuack implements IQuackBehavior {
    quack() {
        console.log("不会叫");
    }
}