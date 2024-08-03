import { MallardDuck } from "./entity/MallardDuck";
import { RedHeadDuck } from "./entity/RedHeadDuck";
import { RubberDuck } from "./entity/RubberDuck";
import { FlyWithWings } from "./behavior/impl/FlyWithWings";
import { Quack } from "./behavior/impl/Quack";
import { Squeak } from "./behavior/impl/Squeak";

class DuckTest {
    constructor() {
        let mallardDuck = new MallardDuck();
        mallardDuck.display();
        mallardDuck.performFly();
        mallardDuck.performQuack();
        console.log("运行过程中改变行为");
        mallardDuck.setFlyBehavior(new FlyWithWings());
        mallardDuck.performFly();

        console.log("=========================");

        let redHeadDuck = new RedHeadDuck();
        redHeadDuck.display();
        redHeadDuck.performFly();
        redHeadDuck.performQuack();
        console.log("运行过程中改变行为");
        redHeadDuck.setQuackBehavior(new Quack());
        redHeadDuck.performQuack();

        console.log("=========================");

        let rubberDuck = new RubberDuck();
        rubberDuck.display();
        rubberDuck.performFly();
        rubberDuck.performQuack();
        console.log("运行过程中改变行为");
        rubberDuck.setQuackBehavior(new Squeak());
        rubberDuck.performQuack();
    }
}

new DuckTest();
