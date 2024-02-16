import Duck from "./Duck";
import Turkey from "./Turkey";

export default class DuckAdapter implements Turkey {
  private duck: Duck;
  constructor(duck: Duck) {
    this.duck = duck;
  }

  fly(): void {
    this.duck.fly();
  }
  gobble(): void {
    this.duck.quack();
  }
}