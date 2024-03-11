import Quackable from "./Quackable";

export default class DuckCall implements Quackable {
  quack(): void {
    console.log('Kwak');
  }
}
