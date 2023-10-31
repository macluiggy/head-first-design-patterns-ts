import Command from "./Command";

export default class Invoker {
  private history: Command[] = [];
  private redoStack: Command[] = [];

  public storeAndExecute(command: Command): void {
    this.history.push(command);
    command.execute();
  }

  public undo(): void {
    const command = this.history.pop();
    command!.undo();
    this.redoStack.push(command as Command);
  }

  public redo(): void {
    const command = this.redoStack.pop();
    command!.redo();
    this.history.push(command as Command);
  }
}