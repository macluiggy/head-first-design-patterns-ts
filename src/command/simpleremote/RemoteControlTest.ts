import GarageDoor from "./GarageDoor";
import GarageDoorOpenCommand from "./GarageDoorOpenCommand";
import Light from "./Light";
import LightOnCommand from "./LightOnCommand";
import SimpleRemoteControl from "./SimpleRemoteControl";

export default class RemoteControlTest {
  public static main(): void {
    const remote: SimpleRemoteControl = new SimpleRemoteControl();
    const light: Light = new Light();
    const garageDoor: GarageDoor = new GarageDoor();
    const lightOn: LightOnCommand = new LightOnCommand(light);
    const garageDoorOpenCommand: GarageDoorOpenCommand =
      new GarageDoorOpenCommand(garageDoor);

    remote.setCommand(lightOn);
    remote.buttonWasPressed();
    remote.setCommand(garageDoorOpenCommand);
    remote.buttonWasPressed();
  }
}

RemoteControlTest.main();
