import Shape from "./Shape";

export default class Circle extends Shape {
  constructor(x: number, y: number, private radius: number, color: string) {
    super(x, y, color);
    this.radius = radius;
  }

  draw(): void {
    console.log(
      `Drawing a circle at (${this.x}, ${this.y}) with radius ${this.radius} and color ${this.color}`
    );
  }
}
