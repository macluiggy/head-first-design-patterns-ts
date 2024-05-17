/**
 * Liskov Substitution Principle
 * this principle states that objects of a superclass should be replaceable with objects of its subclasses without affecting the functionality of the program.
 * In other words, a subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.
 * for example if we have a parent class X and a child classes A and B that inherit from X, if we instantiate an object of class A and pass it to a method that expects an object of class X, the method should work without knowing that it got an object of class A, it is like the structure of X, A and B are the same, so i can use either of them without any problem. 
 */


interface Bird {
  eat(): void;
}

interface FlyingBird extends Bird {
  fly(): void;
}

class Birdx implements FlyingBird {
  eat(): void {
    console.log("Eating...");
  }

  fly(): void {
    console.log("Flying...");
  }
}

class Sparrow implements FlyingBird {
  eat(): void {
    console.log("Eating...");
  }

  fly(): void {
    console.log("Flying...");
  }
}

class Penguin implements Bird {
  eat(): void {
    console.log("Eating...");
  }
  // Penguin doesn't implement fly() because it can't fly
}

// const bird = new Birdx();
const bird = new Sparrow();
bird.eat();
bird.fly();