export default abstract class Shape {
  // public showDimensions(): void {
  //   console.log(`Area: ${this.getArea()}`);
  //   console.log(`Perimeter: ${this.getPerimeter()}`);
  // }
  // abstract getArea(): number;
  // abstract getPerimeter(): number;
  // radius: number;
  // constructor(radius: number) {
  //   this.radius = radius;
  // }

  abstract getArea(): number;
  abstract getPerimeter(): number;
}