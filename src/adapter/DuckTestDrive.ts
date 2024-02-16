import Duck from "./Duck";
import MallardDuck from "./MallardDuck";
import TurkeyAdapter from "./TurkeyAdapter";
import WildTurkey from "./WildTurkey";

export default class DuckTestDrive {
  static main(): void {
    const duck = new MallardDuck();
    const turkey = new WildTurkey();
    const turkeyAdapter = new TurkeyAdapter(turkey);

    console.log('The Turkey says...');
    turkey.gobble();
    turkey.fly();

    console.log('\nThe Duck says...');
    DuckTestDrive.testDuck(duck);

    console.log('\nThe TurkeyAdapter says...');
    DuckTestDrive.testDuck(turkeyAdapter);
  }

  static testDuck(duck: Duck): void {
    duck.quack();
    duck.fly();
  }
}

DuckTestDrive.main();