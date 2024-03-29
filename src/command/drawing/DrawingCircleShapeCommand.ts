import Circle from "./Circle";
import Command from "./Command";
import DrawingCanvas from "./DrawingCanvas";

export default class DrawingCircleShapeCommand implements Command {
  constructor(private drawingCanvas: DrawingCanvas, private circle: Circle) {
    this.drawingCanvas = drawingCanvas;
    this.circle = circle;
  }

  execute(): void {
    const circle = this.drawingCanvas.drawShape(this.circle);
    this.drawingCanvas.addShape(circle);
  }

  undo(): void {
    this.drawingCanvas.removeShape(this.circle);
  }

  redo(): void {
    this.execute();
  }
}
