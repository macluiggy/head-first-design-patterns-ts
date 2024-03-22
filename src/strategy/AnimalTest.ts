import Duck from "./Duck";
import FlyWithWings from "./FlyWithWings";
import Quack from "./Quack";

abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

export default class AnimalTest {
  static main(): void {
    const at = new AnimalTest();
    at.makeSomeAnimals();
  }

  public makeSomeAnimals(): void {
    const dog = new Dog();
    const cat = new Cat();
    // treat dog and cat as their supertype, Animal
    const animals: Animal[] = [dog, cat];
    animals.forEach((animal) => {
      animal.makeSound();
    });
  }
}
