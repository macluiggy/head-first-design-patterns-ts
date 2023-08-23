export default abstract class Shape {
  color: string;
  x: number;
  y: number;
  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  abstract draw(): void;

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }

  rotate(angle: number) {
    console.log(`Rotating shape ${this.constructor.name} by ${angle}`);
  }

  scale(factor: number) {
    console.log(`Scaling shape ${this.constructor.name} by ${factor}`);
  }
}
