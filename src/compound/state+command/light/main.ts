import Light from "./Light";
import LightSwitch from "./LightSwitch";
import LightOnCommand from "./LightOnCommand";
import LightOffCommand from "./LightOffCommand";

const light = new Light();
const lightSwitch = new LightSwitch()
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

lightSwitch.setCommand(lightOnCommand);
lightSwitch.press();
lightSwitch.undo();
lightSwitch.setCommand(lightOffCommand);
lightSwitch.press();
lightSwitch.undo();
