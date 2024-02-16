import DuckAdapter from "./DuckAdapter";
import MallardDuck from "./MallardDuck";
import Turkey from "./Turkey";
import WildTurkey from "./WildTurkey";

export default class TurkeyTestDrive {
  static main(): void {
    const duck = new MallardDuck();
    const turkey = new WildTurkey();
    const duckAdapter = new DuckAdapter(duck);

    console.log('The Duck says...');
    duck.quack();
    duck.fly();

    console.log('\nThe Turkey says...');
    TurkeyTestDrive.testTurkey(turkey);

    console.log('\nThe TurkeyAdapter says...');
    TurkeyTestDrive.testTurkey(duckAdapter);
  }

  static testTurkey(duck: Turkey): void {
    duck.gobble();
    duck.fly();
  }
}

TurkeyTestDrive.main();