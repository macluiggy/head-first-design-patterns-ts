import Command from "./Command";
import Light from "./Light";
import LightOffCommand from "./LightOffCommand";


export default class LightSwitch {
  command: Command;

  constructor() {
    this.command = new LightOffCommand(new Light());
  }

  setCommand(command: Command): void {
    this.command = command;
  }

  press(): void {
    this.command.execute();
  }

  undo(): void {
    this.command.undo();
  }
}
