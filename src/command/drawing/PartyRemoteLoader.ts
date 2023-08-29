import DrawingCanvas from "./DrawingCanvas";
import Circle from "./Circle";
import RemoteControlWithUndo from "./RemoteControlWithUndo";
import DrawingCircleShapeCommand from "./DrawingCircleShapeCommand";
import TranslateCircleShapeCommand from "./TranslateCircleShapeCommand";
import RotateCircleShapeCommand from "./RotateCircleShapeCommand";
import ScaleCircleShapeCommand from "./ScaleCircleShapeCommand";
import MacroCommand from "./MacroCommand";

export default class PartyRemoteLoader {
  public static main(args: string[]): void {
    const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();

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

    const macroCommand: MacroCommand = new MacroCommand([
      drawingCircleShapeCommand,
      translateCircleShapeCommand,
      rotateCircleShapeCommand,
      scaleCircleShapeCommand,
    ]);

    remoteControl.setCommand(0, macroCommand);

    remoteControl.onButtonWasPushed(0);
    remoteControl.undoButtonWasPushed();
  }
}

PartyRemoteLoader.main([]);
