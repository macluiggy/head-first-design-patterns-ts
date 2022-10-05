export abstract class AbstractVehicle {
  protected abstract speed: number;
  protected abstract maxSpeed: number;
  protected abstract length: number;
  public abstract getSpeed(): number;
  public abstract getMaxSpeed(): number;
  public abstract getLength(): number;
  public abstract accelerate(acceleration: number): void;
  public abstract decelerate(): void;
  public abstract toString(): string;
  // public abstract getDescription(): string;
  // public abstract getCost(): number;
}

export class Vehicle extends AbstractVehicle {
  protected speed: number;
  protected maxSpeed: number;
  protected length: number;
  public constructor(speed: number, maxSpeed: number, length: number) {
    super();
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.length = length;
  }
  public getSpeed(): number {
    return this.speed;
  }
  public getMaxSpeed(): number {
    return this.maxSpeed;
  }
  public getLength(): number {
    return this.length;
  }
  public accelerate(acceleration: number): void {
    this.speed =
      this.speed + acceleration > this.maxSpeed
        ? this.maxSpeed
        : this.speed + acceleration < 0
        ? 0
        : this.speed + acceleration;
  }
  public decelerate(aceleration: number = 1): void {
    this.accelerate(-aceleration);
  }
  public toString(): string {
    return `Speed: ${this.speed}, Max speed: ${this.maxSpeed}, Length: ${this.length}`;
  }
}

export class Car extends Vehicle {
  constructor(speed: number) {
    super(speed, 120, 6);
  }
}

let car = new Car(0);
console.log(car.toString());
car.accelerate(100);
console.log(car.toString());
car.accelerate(1010);
console.log(car.toString());
car.decelerate(100);
console.log(car.toString());
car.decelerate(1010);
console.log(car.toString());