import { IQuackBehavior } from "../IQuackBehavior";

export class Squeak implements IQuackBehavior {
    quack() {
        console.log("吱吱叫");
    }
}