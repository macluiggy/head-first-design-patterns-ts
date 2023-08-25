import Circle from "./Circle";
import Command from "./Command";
import DrawingCanvas from "./DrawingCanvas";

export default class RotateCircleShapeCommand implements Command {
  constructor(
    private drawingCanvas: DrawingCanvas,
    private circle: Circle,
    private angle: number
  ) {
    this.drawingCanvas = drawingCanvas;
    this.circle = circle;
    this.angle = angle;
  }

  execute(): void {
    this.drawingCanvas.rotateShape(this.circle, this.angle);
  }

  undo(): void {
    this.drawingCanvas.rotateShape(this.circle, -this.angle);
  }

  redo(): void {
    this.execute();
  }
}