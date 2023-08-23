import Circle from "./Circle";
import DrawingCanvas from "./DrawingCanvas";
import DrawingCircleShapeCommand from "./DrawingCircleShapeCommand";

export default class RemoteControl {
  public static main(): void {
    const drawingCanvas: DrawingCanvas = new DrawingCanvas();
    const drawingCircleShapeCommand: DrawingCircleShapeCommand =
      new DrawingCircleShapeCommand(drawingCanvas, new Circle(2, 2, 2, "red"));

    // console.log(drawingCanvas.getShapes());

    drawingCircleShapeCommand.execute();
    drawingCircleShapeCommand.undo();
    drawingCircleShapeCommand.redo();

    // console.log(drawingCanvas.getShapes());
  }
}

RemoteControl.main();
