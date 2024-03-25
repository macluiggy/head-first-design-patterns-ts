import ConcretePizzaStore from "./ConcretePizzaStore";
import ExtraCheeseDecorator from "./ExtraCheeseDecorator";
import { PizzaType } from "./PizzaType";

export default class PizzaTestDrive {
  public static main(): void {
    const margherita = new ConcretePizzaStore().createPizza(
      PizzaType.Margherita
    );
    console.log(`You ordered a ${margherita.getDescription()} with cost: $${margherita.cost()}`);
    const margheritaWithExtraCheese = new ExtraCheeseDecorator(margherita);
    console.log(`You ordered a ${margheritaWithExtraCheese.getDescription()} with cost: $${margheritaWithExtraCheese.cost()}`);
  }
}

PizzaTestDrive.main();