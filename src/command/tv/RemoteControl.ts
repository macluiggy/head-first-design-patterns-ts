import Command from "./Command";

export default class RemoteControl {
  private commands: Command[] = [];

  addCommand(command: Command): void {
    this.commands.push(command);
  }

  pressButton(slot: number): void {
    this.commands[slot].execute();
  }
}
