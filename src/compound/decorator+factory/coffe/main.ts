import CoffeeFactory from "./CoffeeFactory";
import Coffe from "./Coffe";
import CoffeeDecorator from "./CoffeDecorator";
import MilkDecorator from "./MilkDecorator";
import SugarDecorator from "./SugarDecorator";

const coffee: Coffe = CoffeeFactory.createCoffee("Espresso");
console.log(coffee.description());
console.log(coffee.cost());

const coffeeWithMilk: CoffeeDecorator = new MilkDecorator(coffee);
console.log(coffeeWithMilk.description());
console.log(coffeeWithMilk.cost());

const coffeeWithSugar: CoffeeDecorator = new SugarDecorator(coffee);
console.log(coffeeWithSugar.description());
console.log(coffeeWithSugar.cost());

const coffeeWithMilkAndSugar: CoffeeDecorator = new MilkDecorator(coffeeWithSugar);
console.log(coffeeWithMilkAndSugar.description());
console.log(coffeeWithMilkAndSugar.cost());