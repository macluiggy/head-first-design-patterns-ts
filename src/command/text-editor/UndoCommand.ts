import Command from "./Command";

export default class UndoCommand implements Command {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  public execute(): void {
    this.command.undo();
  }

  public undo(): void {
    this.command.redo();
  }

  public redo(): void {
    this.command.undo();
  }
}