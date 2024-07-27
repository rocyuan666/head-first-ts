import { MallardDuck } from "./entity/MallardDuck";
import { RedHeadDuck } from "./entity/RedHeadDuck";
import { RubberDuck } from "./entity/RubberDuck";

class DuckTest {
    constructor() {
        let mallardDuck = new MallardDuck();
        mallardDuck.display();

        let redHeadDuck = new RedHeadDuck();
        redHeadDuck.display();

        let rubberDuck = new RubberDuck();
        rubberDuck.display();
    }
}

new DuckTest();
