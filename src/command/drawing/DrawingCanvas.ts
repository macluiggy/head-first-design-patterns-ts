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
    // console.log(
    //   `Translating shape ${shape.constructor.name} by ${dx} and ${dy}`
    // );

    shape.move(dx, dy);
    console.log(
      `Now the ${shape.constructor.name} is at (${shape.x}, ${shape.y})`
    );
  }

  rotateShape(shape: Shape, angle: number) {
    shape.rotate(angle);
  }

  scaleShape(shape: Shape, factor: number) {
    shape.scale(factor);
  }

  getShapes(): Shape[] {
    return this.shapes;
  }
}
