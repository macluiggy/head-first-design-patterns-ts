export default abstract class GameProduct {
  abstract name: string;
  abstract type: string;
  abstract price: number;
  abstract description: string;

  // constructor() {
  //   this.name = "";
  //   this.type = "";
  //   this.price = 0;
  //   this.description = "";
  // }

  abstract buy(): void;

  abstract download(): void;

  abstract install(): void;

  abstract play(): void;
}
