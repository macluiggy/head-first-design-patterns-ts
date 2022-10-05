import Shape from "./Shape";

export default class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  public getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
