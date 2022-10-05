import Circle from "./Circle";
import Elipse from "./Elipse";
import Shape from "./Shape";

export default abstract class ShapeFactoryAbstract {
  // area: number;
  // perimeter: number;
  // constructor() {
  //   this.area = 0;
  //   this.perimeter = 0;
  // }
  showDimensions(type: string): void {
    let shape = this.createShape(type);
    let area = shape.getArea();
    let perimeter = shape.getPerimeter();
    console.log(`Area: ${area}`);
    console.log(`Perimeter: ${perimeter}`);
  }
  abstract createShape(type: string): Shape;
  // abstract getArea(): number;
  // abstract getPerimeter(): number;
}
