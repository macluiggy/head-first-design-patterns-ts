import Duck from "./Duck";
import FlyRocketPowered from "./FlyRocketPowered";
import MallardDuck from "./MallardDuck";
import ModelDuck from "./ModelDuck";

export default class MiniDuckSimulator1 {
  public static main(): void {
    const mallard: Duck = new MallardDuck();
    mallard.performFly();
    mallard.performQuack();

    const model = new ModelDuck();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
  }
}

MiniDuckSimulator1.main();