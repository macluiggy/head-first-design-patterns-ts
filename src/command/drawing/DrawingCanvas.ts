import Circle from "./Circle";
import Shape from "./Shape";

export default class DrawingCanvas {
  private shapes: Shape[] = [];

  drawCircle(circle: Circle) {
    circle.draw();
    return circle;
  }

  addShape(shape: Shape) {
    this.shapes.push(shape);
  }

  removeShape(shape: Shape) {
    const index = this.shapes.indexOf(shape);
    if (index !== -1) {
      this.shapes.splice(index, 1);
    }
  }

  getShapes(): Shape[] {
    return this.shapes;
  }
}
