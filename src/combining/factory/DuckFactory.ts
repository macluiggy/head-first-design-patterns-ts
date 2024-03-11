import AbstractDuckFactory from "./AbstractDuckFactory";
import DuckCall from "./DuckCall";
import MallardDuck from "./MallardDuck";
import Quackable from "./Quackable";
import RedheadDuck from "./RedheadDuck";
import RubberDuck from "./RubberDuck";

export default class DuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new MallardDuck();
  }

  public createRedheadDuck(): Quackable {
    return new RedheadDuck();
  }

  public createDuckCall(): Quackable {
    return new DuckCall();
  }

  public createRubberDuck(): Quackable {
    return new RubberDuck();
  }
}