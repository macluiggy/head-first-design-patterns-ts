import Command from "./Command";

export default class LightSwitch {
  command: Command;

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
