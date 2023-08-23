import Circle from "./Circle";
import DrawingCanvas from "./DrawingCanvas";
import DrawingCircleShapeCommand from "./DrawingCircleShapeCommand";
import TranslateCircleShapeCommand from "./TranslateCircleShapeCommand";

export default class RemoteControl {
  public static main(): void {
    const drawingCanvas: DrawingCanvas = new DrawingCanvas();

    const circle = new Circle(2, 2, 2, "red")
    const drawingCircleShapeCommand: DrawingCircleShapeCommand =
      new DrawingCircleShapeCommand(drawingCanvas, circle);
      const translateCircleShapeCommand: TranslateCircleShapeCommand =
      new TranslateCircleShapeCommand(drawingCanvas, circle, 2, 2);

    // console.log(drawingCanvas.getShapes());

    drawingCircleShapeCommand.execute();
    drawingCircleShapeCommand.undo();
    drawingCircleShapeCommand.redo();

    translateCircleShapeCommand.execute();
    translateCircleShapeCommand.undo();
    translateCircleShapeCommand.redo();

    // console.log(drawingCanvas.getShapes());
  }
}

RemoteControl.main();
