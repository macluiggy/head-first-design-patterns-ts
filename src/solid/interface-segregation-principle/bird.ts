/**
 * Interface Segregation Principle
 * This principle states that a client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.
 * In kids words, lets imagine you have a toy bird, you can make it fly, eat and swim, but you can't make a toy bird swim, so you should not force the toy bird to implement the swim method.
 * To solve this you would create three interfaces, one for each method, and then you would implement the interfaces in the toy bird class, if you instantiate a Sparrow class you would use the FlyingBird interface, if you instantiate a Penguin class you would use the SwimmingBird interface.the Bird interface can only have the eat method. and the FlyingBird interface can have the fly method and the Bird interface, and the SwimmingBird interface can have the swim method and the Bird interface.
 */

interface Bird {
  eat(): void;
}

interface FlyingBird extends Bird {
  fly(): void;
}

interface SwimmingBird extends Bird {
  swim(): void;
}

class Sparrow implements FlyingBird {
  eat() {
    console.log("Sparrow is eating");
  }

  fly() {
    console.log("Sparrow is flying");
  }
}

class Penguin implements SwimmingBird {
  eat() {
    console.log("Penguin is eating");
  }

  swim() {
    console.log("Penguin is swimming");
  }
}

const sparrow = new Sparrow();
sparrow.eat();
sparrow.fly();

const penguin = new Penguin();
penguin.eat();
penguin.swim();
