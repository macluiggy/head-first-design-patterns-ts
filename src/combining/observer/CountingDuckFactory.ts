import AbstractDuckFactory from "./AbstractDuckFactory";
import Quackable from "./Quackable";
import QuackCounter from "./QuackCounter";
import MallardDuck from "./MallardDuck";
import RedheadDuck from "./RedheadDuck";
import DuckCall from "./DuckCall";
import RubberDuck from "./RubberDuck";
import GooseAdapter from "../adapter/GooseAdapter";
import Goose from "./Goose";

export default class CountingDuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new QuackCounter(new MallardDuck());
  }

  public createRedheadDuck(): Quackable {
    return new QuackCounter(new RedheadDuck());
  }

  public createDuckCall(): Quackable {
    return new QuackCounter(new DuckCall());
  }

  public createRubberDuck(): Quackable {
    return new QuackCounter(new RubberDuck());
  }

  public createGooseDuck(): Quackable {
    return new GooseAdapter(new Goose());
  }
}