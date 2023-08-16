import CeilingFan from "./CeilingFan";
import CeilingFanOffCommand from "./CeilingFanOffCommand";
import CeilingFanOnCommand from "./CeilingFanOnCommand";
import GarageDoor from "./GarageDoor";
import GarageDoorDownCommand from "./GarageDoorDownCommand";
import GarageDoorUpCommand from "./GarageDoorUpCommand";
import Hottub from "./Hottub";
import HottubOffCommand from "./HottubOffCommand";
import HottubOnCommand from "./HottubOnCommand";
import Light from "./Light";
import LightOffCommand from "./LightOffCommand";
import LightOnCommand from "./LightOnCommand";
import RemoteControl from "./RemoteControl";
import RemoteControlWithUndo from "./RemoteControleWithUndo";
import Stereo from "./Stereo";
import StereoOffCommand from "./StereoOffCommand";
import StereoOnWithCDCommand from "./StereoOnWithCDCommand";
import TV from "./TV";
import TVOffCommand from "./TVOffCommand";
import TVOnCommand from "./TVOnCommand";

export default class RemoteLoader {
  public static main(args: string[]): void {
    const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();

    const livingRoomLight: Light = new Light("Living Room");
    const kitchenLight: Light = new Light("Kitchen");
    const ceilingFan: CeilingFan = new CeilingFan("Living Room");
    const garageDoor: GarageDoor = new GarageDoor("Garage");
    const stereo: Stereo = new Stereo("Living Room");
    const hottub: Hottub = new Hottub();
    const tv: TV = new TV("Living Room");

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
    const stereoOnWithCD: StereoOnWithCDCommand = new StereoOnWithCDCommand(
      stereo
    );
    const stereoOffWithCD: StereoOffCommand = new StereoOffCommand(stereo);
    const hottubOn: HottubOnCommand = new HottubOnCommand(hottub);
    const hottubOff: HottubOffCommand = new HottubOffCommand(hottub);
    const tvOnCommand: TVOnCommand = new TVOnCommand(tv);
    const tvOffCommand: TVOffCommand = new TVOffCommand(tv);

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
    remoteControl.setCommand(3, garageDoorUp, garageDoorDown);
    remoteControl.setCommand(4, stereoOnWithCD, stereoOffWithCD);
    remoteControl.setCommand(5, hottubOn, hottubOff);
    remoteControl.setCommand(6, tvOnCommand, tvOffCommand);

    console.log(remoteControl.toString());

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.undoButtonWasPushed();

    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    remoteControl.undoButtonWasPushed();

    remoteControl.onButtonWasPushed(2);
    remoteControl.offButtonWasPushed(2);
    remoteControl.undoButtonWasPushed();

    remoteControl.onButtonWasPushed(3);
    remoteControl.offButtonWasPushed(3);
    remoteControl.undoButtonWasPushed();

    remoteControl.onButtonWasPushed(4);
    remoteControl.offButtonWasPushed(4);
    remoteControl.undoButtonWasPushed();

    remoteControl.onButtonWasPushed(5);
    remoteControl.offButtonWasPushed(5);
    remoteControl.undoButtonWasPushed();

    remoteControl.onButtonWasPushed(6);
    remoteControl.offButtonWasPushed(6);
    remoteControl.undoButtonWasPushed();
  }
}

RemoteLoader.main([]);
