import TV from "./TV";
import Light from "./Light";
import Stereo from "./Stereo";
import Hottub from "./Hottub";
import CeilingFan from "./CeilingFan";
import TVOnCommand from "./TVOnCommand";
import TVOffCommand from "./TVOffCommand";
import LightOnCommand from "./LightOnCommand";
import LightOffCommand from "./LightOffCommand";
import StereoOnWithCDCommand from "./StereoOnWithCDCommand";
import StereoOffCommand from "./StereoOffCommand";
import HottubOnCommand from "./HottubOnCommand";
import HottubOffCommand from "./HottubOffCommand";
import CeilingFanHighCommand from "./CeilingFanHighCommand";
import CeilingFanOffCommand from "./CeilingFanOffCommand";
import CeilingFanMediumCommand from "./CeilingFanMediumCommand";
import RemoteControlWithUndo from "./RemoteControleWithUndo";
import Command from "./Command";
import MacroCommand from "./MacroCommand";

export default class PartyRemoteLoader {
  public static main(args: string[]): void {
    const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();

    const light: Light = new Light("Living Room");
    const tv: TV = new TV("Living Room");
    const stereo: Stereo = new Stereo("Living Room");
    const hottub: Hottub = new Hottub();

    const lightOn: LightOnCommand = new LightOnCommand(light);
    const stereoOn: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo);
    const tvOn: TVOnCommand = new TVOnCommand(tv);
    const hottubOn: HottubOnCommand = new HottubOnCommand(hottub);

    const lightOff: LightOffCommand = new LightOffCommand(light);
    const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);
    const tvOff: TVOffCommand = new TVOffCommand(tv);
    const hottubOff: HottubOffCommand = new HottubOffCommand(hottub);

    const partyOn: Command[] = [lightOn, stereoOn, tvOn, hottubOn];
    const partyOff: Command[] = [lightOff, stereoOff, tvOff, hottubOff];

    const partyOnMacro: Command = new MacroCommand(partyOn);
    const partyOffMacro: Command = new MacroCommand(partyOff);

    remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

    console.log(remoteControl);
    console.log("--- Pushing Macro On---");
    remoteControl.onButtonWasPushed(0);
    console.log("--- Pushing Macro Off---");
    remoteControl.offButtonWasPushed(0);

  }
}

PartyRemoteLoader.main([]);