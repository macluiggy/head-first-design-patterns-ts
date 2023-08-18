import Command from "./Command";

export default class MacroCommand implements Command {
  private commands: Command[]

  constructor(commands: Command[]) {
    this.commands = commands
  }

  execute(): void {
    for (let i = 0; i < this.commands.length; i++) {
      const command = this.commands[i];
      command.execute()
    }
  }

  undo(): void {
    for (let i = 0; i < this.commands.length; i++) {
      const command = this.commands[i];
      command.undo!()
    }
  }
}