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
    console.log('Sparrow is eating');
  }

  fly() {
    console.log('Sparrow is flying');
  }
}

class Penguin implements SwimmingBird {
  eat() {
    console.log('Penguin is eating');
  }

  swim() {
    console.log('Penguin is swimming');
  }
}

const sparrow = new Sparrow();
sparrow.eat();
sparrow.fly();

const penguin = new Penguin();
penguin.eat();
penguin.swim();