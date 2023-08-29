import Circle from "./Circle";
import DrawingCanvas from "./DrawingCanvas";
import DrawingCircleShapeCommand from "./DrawingCircleShapeCommand";
import RotateCircleShapeCommand from "./RotateCircleShapeCommand";
import ScaleCircleShapeCommand from "./ScaleCircleShapeCommand";
import TranslateCircleShapeCommand from "./TranslateCircleShapeCommand";

export default class RemoteControl {
  public static main(): void {
    const drawingCanvas: DrawingCanvas = new DrawingCanvas();

    const circle = new Circle(2, 2, 2, "red");
    const drawingCircleShapeCommand: DrawingCircleShapeCommand =
      new DrawingCircleShapeCommand(drawingCanvas, circle);

    const translateCircleShapeCommand: TranslateCircleShapeCommand =
      new TranslateCircleShapeCommand(drawingCanvas, circle, 2, 2);

    const rotateCircleShapeCommand: RotateCircleShapeCommand =
      new RotateCircleShapeCommand(drawingCanvas, circle, 90);

    const scaleCircleShapeCommand: ScaleCircleShapeCommand =
      new ScaleCircleShapeCommand(drawingCanvas, circle, 2);

    // console.log(drawingCanvas.getShapes());

    drawingCircleShapeCommand.execute();
    drawingCircleShapeCommand.undo();
    drawingCircleShapeCommand.redo();

    translateCircleShapeCommand.execute();
    translateCircleShapeCommand.undo();
    translateCircleShapeCommand.redo();

    rotateCircleShapeCommand.execute();
    rotateCircleShapeCommand.undo();
    rotateCircleShapeCommand.redo();

    scaleCircleShapeCommand.execute();
    scaleCircleShapeCommand.undo();
    scaleCircleShapeCommand.redo();

    // console.log(drawingCanvas.getShapes());
  }
}

RemoteControl.main();
