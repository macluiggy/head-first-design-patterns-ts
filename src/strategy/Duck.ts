import FlyBehavior from "./FlyBehavior";
import QuackBehavior from "./QuackBehavior";

export default abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  public setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  public abstract display(): void;

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  swim() {
    console.log("All ducks float, even decoys!");
  }
}
