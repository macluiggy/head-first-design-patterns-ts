import Command from "./Command";
export default class SimpleRemoteControl {
  private slot: Command;

  public setCommand(command: Command): void {
    this.slot = command;
  }

  public buttonWasPressed(): void {
    this.slot.execute();
  }
}
