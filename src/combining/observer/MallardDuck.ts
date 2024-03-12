import Quackable from "./Quackable";

export default class MallardDuck implements Quackable {
  quack(): void {
    console.log('Quack MallardDuck');
  }
}