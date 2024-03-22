import QuackBehavior from "./QuackBehavior";

export default class FakeQuack  implements QuackBehavior {
  quack() {
    console.log('Qwak');
  }
}