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