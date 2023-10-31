import AddTextCommand from "./AddTextCommand";
import Command from "./Command";
import TextEditor from "./TextEditor";

export default class Invoker {
  private commands: Command[] = [];

  public storeAndExecute(command: Command): void {
    this.commands.push(command);
    command.execute();
  }

  public undo(): void {
    const command = this.commands.pop();
    if (command) {
      command.undo();
    }
  }

  public redo(): void {
    const command = this.commands.pop();
    if (command) {
      command.redo();
    }
  }
}
