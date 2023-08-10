import CeilingFan from "./CeilingFan";
import CeilingFanOffCommand from "./CeilingFanOffCommand";
import CeilingFanOnCommand from "./CeilingFanOnCommand";
import GarageDoor from "./GarageDoor";
import GarageDoorDownCommand from "./GarageDoorDownCommand";
import GarageDoorUpCommand from "./GarageDoorUpCommand";
import Light from "./Light";
import LightOffCommand from "./LightOffCommand";
import LightOnCommand from "./LightOnCommand";
import RemoteControl from "./RemoteControl";

export default class RemoteLoader {
  public static main(args: string[]): void {
    const remoteControl: RemoteControl = new RemoteControl();

    const livingRoomLight: Light = new Light("Living Room");
    const kitchenLight: Light = new Light("Kitchen");
    const ceilingFan: CeilingFan = new CeilingFan("Living Room");
    const garageDoor: GarageDoor = new GarageDoor("Garage");

    const livingRoomLightOn: LightOnCommand = new LightOnCommand(
      livingRoomLight
    );
    const livingRoomLightOff: LightOffCommand = new LightOffCommand(
      livingRoomLight
    );
    const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
    const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight);
    const ceilingFanOn: CeilingFanOnCommand = new CeilingFanOnCommand(
      ceilingFan
    );
    const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(
      ceilingFan
    );
    const garageDoorUp: GarageDoorUpCommand = new GarageDoorUpCommand(
      garageDoor
    );
    const garageDoorDown: GarageDoorDownCommand = new GarageDoorDownCommand(
      garageDoor
    );

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
    remoteControl.setCommand(3, garageDoorUp, garageDoorDown);

    console.log(remoteControl.toString());

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    remoteControl.onButtonWasPushed(2);
    remoteControl.offButtonWasPushed(2);
    remoteControl.onButtonWasPushed(3);
    remoteControl.offButtonWasPushed(3);
  }
}

RemoteLoader.main([]);
