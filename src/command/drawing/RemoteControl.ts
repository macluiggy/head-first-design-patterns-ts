import Circle from "./Circle";
import DrawingCanvas from "./DrawingCanvas";
import DrawingCanvasCircleCommand from "./DrawingCanvasCircleCommand";

export default class RemoteControl {
  public static main(): void {
    const drawingCanvas: DrawingCanvas = new DrawingCanvas();
    const drawingCanvasCircleCommand: DrawingCanvasCircleCommand =
      new DrawingCanvasCircleCommand(drawingCanvas, new Circle(2, 2, 2, "red"));

    // console.log(drawingCanvas.getShapes());

    drawingCanvasCircleCommand.execute();
    drawingCanvasCircleCommand.undo();
    drawingCanvasCircleCommand.redo();

    // console.log(drawingCanvas.getShapes());
  }
}

RemoteControl.main();
