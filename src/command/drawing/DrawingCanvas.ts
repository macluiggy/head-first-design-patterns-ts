import Shape from "./Shape";

export default class DrawingCanvas {
  private shapes: Shape[] = [];

  drawShape(shape: Shape) {
    shape.draw();
    return shape;
  }

  addShape(shape: Shape) {
    this.shapes.push(shape);
  }

  removeShape(shape: Shape) {
    console.log(`Removing shape ${shape.constructor.name}`);

    const index = this.shapes.indexOf(shape);
    if (index !== -1) {
      this.shapes.splice(index, 1);
    }
  }

  translateShape(shape: Shape, dx: number, dy: number) {
    console.log(
      `Translating shape ${shape.constructor.name} by ${dx} and ${dy}`
    );

    shape.move(dx, dy);
  }

  rotateShape(shape: Shape, angle: number) {
    console.log(`Rotating shape ${shape.constructor.name} by ${angle}`);

    shape.rotate(angle);
  }

  scaleShape(shape: Shape, factor: number) {
    console.log(`Scaling shape ${shape.constructor.name} by ${factor}`);

    shape.scale(factor);
  }

  getShapes(): Shape[] {
    return this.shapes;
  }
}
