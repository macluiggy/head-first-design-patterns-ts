import Duck from "./Duck";
import FlyNoWay from "./FlyNoWay";
import Squeak from "./Squeak";

export default class RubberDuck extends Duck {
  constructor(flyBehavior: FlyNoWay, quackBehavior: Squeak) {
    super(new FlyNoWay(), new Squeak());
    this.setFlyBehavior(flyBehavior);
    this.setQuackBehavior(quackBehavior);
  }
  display() {
    console.log("I'm a rubber duckie");
  }
}
