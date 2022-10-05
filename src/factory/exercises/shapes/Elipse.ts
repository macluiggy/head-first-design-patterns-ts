import Shape from "./Shape";

export default class Elipse extends Shape {
  radiusA: number;
  radiusB: number;
  constructor(radiusA: number, radiusB: number) {
    super();
    this.radiusA = radiusA;
    this.radiusB = radiusB;
  }
  public getArea(): number {
    return Math.PI * this.radiusA * this.radiusB;
  }
  public getPerimeter(): number {
    return 2 * Math.PI * Math.sqrt((this.radiusA ** 2 + this.radiusB ** 2) / 2);
  }
}
