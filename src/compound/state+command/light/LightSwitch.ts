import Command from "./Command";

export default class LightSwitch {
  command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  setCommand(command: Command): void {
    this.command = command;
  }

  on(): void {
    this.command.execute();
  }

  off(): void {
    this.command.undo();
  }
}