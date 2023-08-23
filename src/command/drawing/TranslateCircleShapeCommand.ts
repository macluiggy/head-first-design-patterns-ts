import Circle from "./Circle";
import Command from "./Command";
import DrawingCanvas from "./DrawingCanvas";

export default class TranslateCircleShapeCommand implements Command {
  constructor(
    private drawingCanvas: DrawingCanvas,
    private circle: Circle,
    private dx: number,
    private dy: number
  ) {
    this.drawingCanvas = drawingCanvas;
    this.circle = circle;
    this.dx = dx;
    this.dy = dy;
  }

  execute(): void {
    this.drawingCanvas.translateShape(this.circle, this.dx, this.dy);
  }

  undo(): void {
    this.drawingCanvas.translateShape(this.circle, -this.dx, -this.dy);
  }

  redo(): void {
    this.execute();
  }
}