export default abstract class Car {
  name: string;
  constructor(name: string = "") {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public addWheels(): void {
    console.log("Adding wheels");
  }
  public addEngine(): void {
    console.log("Adding engine");
  }

  abstract getDescription(): string;
  abstract getCost(): number;
  addDecoration(): void {}
}
