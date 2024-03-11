import DuckCall from "./DuckCall";
import Goose from "./Goose";
import GooseAdapter from "./GooseAdapter";
import MallardDuck from "./MallardDuck";
import Quackable from "./Quackable";
import RedheadDuck from "./RedheadDuck";
import RubberDuck from "./RubberDuck";

export default class DuckSimulator {
  public static main(): void {
    const simulator: DuckSimulator = new DuckSimulator();
    simulator.simulate();
  }

  public simulate(): void {
    const mallardDuck: Quackable = new MallardDuck();
    const redheadDuck: Quackable = new RedheadDuck();
    const duckCall: Quackable = new DuckCall();
    const rubberDuck: Quackable = new RubberDuck();
    const gooseDuck: Quackable = new GooseAdapter(new Goose());
    
    console.log('\nDuck Simulator');

    this._simulate(mallardDuck);
    this._simulate(redheadDuck);
    this._simulate(duckCall);
    this._simulate(rubberDuck);
    this._simulate(gooseDuck);

  }

  private _simulate(duck: Quackable): void {
    duck.quack();
  }
}

DuckSimulator.main();
