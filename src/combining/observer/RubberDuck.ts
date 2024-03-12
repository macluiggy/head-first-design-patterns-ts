import Quackable from "./Quackable";

export default class RubberDuck implements Quackable {
  quack(): void {
    console.log('Squeak');
  }
}