import Quackable from "./Quackable";

export default class RedheadDuck implements Quackable {
  quack(): void {
    console.log('Quack');
  }
}