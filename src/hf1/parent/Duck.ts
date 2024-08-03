import { IFlyBehavior } from "../behavior/IFlyBehavior";
import { IQuackBehavior } from "../behavior/IQuackBehavior";
import { FlyWithWings } from "../behavior/impl/FlyWithWings";
import { Quack } from "../behavior/impl/Quack";

export abstract class Duck {
    flyBehavior: IFlyBehavior = new FlyWithWings();
    quackBehavior: IQuackBehavior = new Quack();

    abstract display(): void;

    swim(): void {
        console.log("游泳");
    }

    setFlyBehavior(fb: IFlyBehavior): void {
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: IQuackBehavior): void {
        this.quackBehavior = qb;
    }

    performFly(): void {
        this.flyBehavior.fly();
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }

}
