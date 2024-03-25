import MilkDecorator from "./MilkDecorator";
import SimpleCoffe from "./SimpleCoffe";
import SugarDecorator from "./SugarDecorator";
import WhippedCreamDecorator from "./WhippedCreamDecorator";

export default class CoffeTestDrive {
  public static main(args: string[] = []): void {
    let simpleCoffe = new SimpleCoffe();
    console.log(simpleCoffe.description() + " $" + simpleCoffe.cost());
    let milkCoffe = new MilkDecorator(simpleCoffe);
    console.log(milkCoffe.description() + " $" + milkCoffe.cost());
    let sugarCoffe = new SugarDecorator(milkCoffe);
    console.log(sugarCoffe.description() + " $" + sugarCoffe.cost());
    const whippedCreamCoffe = new WhippedCreamDecorator(sugarCoffe);
    console.log(whippedCreamCoffe.description() + " $" + whippedCreamCoffe.cost());
  }
}

CoffeTestDrive.main();
