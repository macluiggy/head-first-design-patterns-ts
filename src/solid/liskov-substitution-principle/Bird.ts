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