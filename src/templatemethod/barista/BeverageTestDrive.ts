import CoffeeWithHook from "./CoffeeWithHook";
import TeaWithHook from "./TeaWithHook";

export default class BeverageTestDrive {
  static main(): void {
    const tea: TeaWithHook = new TeaWithHook();
    const coffee: CoffeeWithHook = new CoffeeWithHook();
    console.log("\nMaking tea...");
    tea.prepareRecipe();
    console.log("\nMaking coffee...");
    coffee.prepareRecipe();
  }
}

BeverageTestDrive.main();
