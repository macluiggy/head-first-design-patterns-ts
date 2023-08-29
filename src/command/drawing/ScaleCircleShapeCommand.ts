import Command from "./Command";
import DrawingCanvas from "./DrawingCanvas";
import Circle from "./Circle";

export default class ScaleCircleShapeCommand implements Command {
  constructor(
    private drawingCanvas: DrawingCanvas,
    private circle: Circle,
    private scale: number
  ) {
    this.drawingCanvas = drawingCanvas;
    this.circle = circle;
    this.scale = scale;
  }

  execute(): void {
    this.drawingCanvas.scaleShape(this.circle, this.scale);
  }

  undo(): void {
    this.drawingCanvas.scaleShape(this.circle, 1 / this.scale);
  }

  redo(): void {
    this.execute();
  }
}