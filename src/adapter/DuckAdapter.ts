import Duck from "./Duck";
import Turkey from "./Turkey";

export default class DuckAdapter implements Turkey {
  private duck: Duck;
  private rand
  constructor(duck: Duck) {
    this.duck = duck;
    this.rand = Math.floor(Math.random() * 5);
  }

  fly(): void {
    if (this.rand === 0) {
      this.duck.fly();
    }
  }
  gobble(): void {
    this.duck.quack();
  }
}