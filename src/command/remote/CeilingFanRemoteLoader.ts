import CeilingFan from "./CeilingFan";
import RemoteControlWithUndo from "./RemoteControleWithUndo";
import CeilingFanHighCommand from "./CeilingFanHighCommand";
import CeilingFanMediumCommand from "./CeilingFanMediumCommand";
import CeilingFanOffCommand from "./CeilingFanOffCommand";

export default class CeilingFanRemoteLoader {
  public static main(args: string[]): void {
    const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();

    const ceilingFan: CeilingFan = new CeilingFan("Living Room");

    const ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(
      ceilingFan
    );
    const ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(
      ceilingFan
    );
    const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(
      ceilingFan
    );

    remoteControl.setCommand(0, ceilingFanMedium, ceilingFanOff);
    remoteControl.setCommand(1, ceilingFanHigh, ceilingFanOff);

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    console.log(remoteControl);
    remoteControl.undoButtonWasPushed();

    remoteControl.onButtonWasPushed(1);
    console.log(remoteControl);
    remoteControl.undoButtonWasPushed();
  }
}

CeilingFanRemoteLoader.main([]);