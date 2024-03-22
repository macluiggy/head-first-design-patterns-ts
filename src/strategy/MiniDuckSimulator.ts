import MallardDuck from "./MallardDuck";
import RubberDuck from "./RubberDuck";
import DecoyDuck from "./DecoyDuck";
import FlyRocketPowered from "./FlyRocketPowered";
import ModelDuck from "./ModelDuck";

export default class MiniDuckSimulator {
  public static main(): void {
    const mallard = new MallardDuck();
    const canFly = {
      fly: () => console.log("I'm flying with wings!"),
    };
    const squeak = {
      quack: () => console.log("Squeak"),
    };
    const rubberDuckie = new RubberDuck(canFly, squeak);
    const decoy = new DecoyDuck();

    const model = new ModelDuck();

    mallard.performFly();
    rubberDuckie.performQuack();
    decoy.performQuack();

    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
  }
}
