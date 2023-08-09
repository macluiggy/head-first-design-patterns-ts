import Light from "./Light";
import LightOffCommand from "./LightOffCommand";
import LightOnCommand from "./LightOnCommand";
import RemoteControl from "./RemoteControl";

export default class RemoteLoader {
  public static main(args: string[]): void {
    const remoteControl: RemoteControl = new RemoteControl();

    const livingRoomLight: Light = new Light("Living Room");
    const kitchenLight: Light = new Light("Kitchen");

    const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
    const livingRoomLightOff: LightOffCommand = new LightOffCommand(livingRoomLight);
    const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
    const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight);

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);

    console.log(remoteControl.toString());
    

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
  }
}

RemoteLoader.main([]);
