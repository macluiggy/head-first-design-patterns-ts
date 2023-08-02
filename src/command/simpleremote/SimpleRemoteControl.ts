import Command from "./Command";
export default class SimpleRemoteControl {
  private slot: Command | null;

  constructor() {
    this.slot = null
  }

  public setCommand(command: Command): void {
    this.slot = command;
  }

  public buttonWasPressed(): void {
    this.slot!.execute();
  }
}
