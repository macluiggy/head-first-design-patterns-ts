import DrawingCircleShapeCommand from "./DrawingCircleShapeCommand";
import RotateCircleShapeCommand from "./RotateCircleShapeCommand";
import ScaleCircleShapeCommand from "./ScaleCircleShapeCommand";
import TranslateCircleShapeCommand from "./TranslateCircleShapeCommand";
import DrawingCanvas from "./DrawingCanvas";
import Circle from "./Circle";
import RemoteControlWithUndo from "./RemoteControlWithUndo";

export default class RemoteLoader {
  public static main(): void {
    const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();
    // commands
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

    // set commands
    remoteControl.setCommand(0, drawingCircleShapeCommand);
    remoteControl.setCommand(1, translateCircleShapeCommand);
    remoteControl.setCommand(2, rotateCircleShapeCommand);
    remoteControl.setCommand(3, scaleCircleShapeCommand);

    // execute commands
    remoteControl.onButtonWasPushed(0);
    remoteControl.undoButtonWasPushed();

    remoteControl.onButtonWasPushed(1);
    remoteControl.undoButtonWasPushed();

    remoteControl.onButtonWasPushed(2);
    remoteControl.undoButtonWasPushed();

    remoteControl.onButtonWasPushed(3);
    remoteControl.undoButtonWasPushed();
  }
}

RemoteLoader.main();
