import Goose from "./Goose";
import Quackable from "./Quackable";

export default class GooseAdapter implements Quackable {
  private goose: Goose;
  constructor(goose: Goose) {
    this.goose = goose;
  }

  quack(): void {
    this.goose.honk();
  }
}
