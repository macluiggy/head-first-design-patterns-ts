import CeilingFan from "./CeilingFan";
import CeilingFanOffCommand from "./CeilingFanOff";
import CeilingFanOnCommand from "./CeilingFanOn";
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

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);

    console.log(remoteControl.toString());

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    remoteControl.onButtonWasPushed(2);
    remoteControl.offButtonWasPushed(2);
  }
}

RemoteLoader.main([]);
