import DuckCall from "./DuckCall";
import Goose from "../adapter/Goose";
import GooseAdapter from "../adapter/GooseAdapter";
import MallardDuck from "./MallardDuck";
import Quackable from "./Quackable";
import RedheadDuck from "./RedheadDuck";
import RubberDuck from "./RubberDuck";
import AbstractDuckFactory from "./AbstractDuckFactory";
import CountingDuckFactory from "./CountingDuckFactory";

export default class DuckSimulator {
  public static main(): void {
    const simulator: DuckSimulator = new DuckSimulator();
    const duckFactory: AbstractDuckFactory = new CountingDuckFactory();
    simulator.simulate(duckFactory);
  }

  public simulate(abstractDuckFactory: AbstractDuckFactory): void {
    // const mallardDuck: Quackable = new MallardDuck();
    // const redheadDuck: Quackable = new RedheadDuck();
    // const duckCall: Quackable = new DuckCall();
    // const rubberDuck: Quackable = new RubberDuck();
    // const gooseDuck: Quackable = new GooseAdapter(new Goose());
    const mallardDuck: Quackable = abstractDuckFactory.createMallardDuck();
    const redheadDuck: Quackable = abstractDuckFactory.createRedheadDuck();
    const duckCall: Quackable = abstractDuckFactory.createDuckCall();
    const rubberDuck: Quackable = abstractDuckFactory.createRubberDuck();
    const gooseDuck: Quackable = abstractDuckFactory.createGooseDuck();

    console.log("\nDuck Simulator");

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
