/**
 * Dependency Inversion Principle
 * This principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions.
 * Abstractions should not depend on details. Details should depend on abstractions.
 * In other words, classes should depend on abstractions, not on concrete implementations.
 * For example, if you have a class that depends on another class, you should depend on an interface instead of the concrete class.
 * This way, you can easily change the implementation of the class without changing the class itself.
 * In this example, we have a BirdKeeper class that depends on a Bird interface. The BirdKeeper class can change the bird it depends on without changing the BirdKeeper class.
 * This way, we can easily change the bird from a Sparrow to an Ostrich without changing the BirdKeeper class.
 */
interface Bird {
  eat(): void;
  sleep(): void;
}

class Sparrow implements Bird {
  eat() {
    console.log("Sparrow is eating");
  }

  sleep() {
    console.log("Sparrow is sleeping");
  }
}

class Ostrich implements Bird {
  eat() {
    console.log("Ostrich is eating");
  }

  sleep() {
    console.log("Ostrich is sleeping");
  }
}

class BirdKeeper {
  private bird: Bird;

  constructor(bird: Bird) {
    this.bird = bird;
  }

  feedBird() {
    this.bird.eat();
  }

  makeBirdSleep() {
    this.bird.sleep();
  }

  changeBird(bird: Bird) {
    this.bird = bird;
  }
}

const spdarrow = new Sparrow();
const ostrich = new Ostrich();

const birdKeeper = new BirdKeeper(spdarrow);
birdKeeper.feedBird();
birdKeeper.makeBirdSleep();
birdKeeper.changeBird(ostrich);
birdKeeper.feedBird();
birdKeeper.makeBirdSleep();
