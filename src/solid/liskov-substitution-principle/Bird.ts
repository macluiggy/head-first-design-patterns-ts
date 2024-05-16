interface Bird {
  eat(): void;
}

interface FlyingBird extends Bird {
  fly(): void;
}

class Bird implements FlyingBird {
  eat(): void {
    console.log("Eating...");
  }

  fly(): void {
    console.log("Flying...");
  }
}

class Penguin extends Bird {
  fly(): void {
    throw new Error("Penguins can't fly");
  }
}
