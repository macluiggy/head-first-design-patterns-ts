import Quackable from "./Quackable";
import AbstractDuckFactory from "./AbstractDuckFactory";
import CountingDuckFactory from "./CountingDuckFactory";
import QuackCounter from "./QuackCounter";
import Flock from "./Flock";
import Quackologist from "./Quackologist";

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
    
    console.log('\nDuck Simulator: With Composite - Flocks');

    const flockOfDucks: Flock = new Flock();

    flockOfDucks.add(mallardDuck);
    flockOfDucks.add(redheadDuck);
    flockOfDucks.add(duckCall);
    flockOfDucks.add(rubberDuck);
    flockOfDucks.add(gooseDuck);

    const flockOfMallards: Flock = new Flock();

    const mallardOne: Quackable = abstractDuckFactory.createMallardDuck();
    const mallardTwo: Quackable = abstractDuckFactory.createMallardDuck();
    const mallardThree: Quackable = abstractDuckFactory.createMallardDuck();
    const mallardFour: Quackable = abstractDuckFactory.createMallardDuck();

    flockOfMallards.add(mallardOne);
    flockOfMallards.add(mallardTwo);
    flockOfMallards.add(mallardThree);
    flockOfMallards.add(mallardFour);

    flockOfDucks.add(flockOfMallards);

    console.log('\nDuck Simulator: With Observer');
    const quackologist: Quackologist = new Quackologist();
    flockOfDucks.registerObserver(quackologist);
    
    
    console.log('\nDuck Simulator: Whole Flock Simulation');
    this._simulate(flockOfDucks);

    // console.log('\nDuck Simulator: Mallard Flock Simulation');
    // this._simulate(flockOfMallards);

    console.log(`The ducks quacked ${QuackCounter.getQuacks()} times`);
  }

  private _simulate(duck: Quackable): void {
    duck.quack();
  }
}

DuckSimulator.main();
