import { IQuackBehavior } from "../IQuackBehavior";

export class Quack implements IQuackBehavior {
    quack() {
        console.log("呱呱叫");
    }
}