import Duck from "./Duck";

export default class MallardDuck implements Duck {
  quack(): void {
    console.log('Quack');
  }

  fly(): void {
    console.log('I’m flying');
  }
}