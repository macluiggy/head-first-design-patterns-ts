import RemoteControl from "./RemoteControl";
import Tv from "./Tv";
import TvTurnOffCommand from "./TvTurnOffCommand";
import TvTurnOnCommand from "./TvTurnOnCommand";

export default class TvTestDrive {
  public static main(): void {
    const remoteControl = new RemoteControl();
    const tv = new Tv();
    const tvTurnOnCommand = new TvTurnOnCommand(tv);
    const tvTurnOffCommand = new TvTurnOffCommand(tv);

    remoteControl.addCommand(tvTurnOnCommand);
    remoteControl.addCommand(tvTurnOffCommand);

    remoteControl.pressButton(0);
    remoteControl.pressButton(1);
  }
}

TvTestDrive.main();
