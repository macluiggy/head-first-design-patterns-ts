import Command from "./Command";
import NoCommand from "./NoCommand";

export default class RemoteControlWithUndo {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;

  // constructor
  constructor() {
    this.onCommands = new Array(7);
    this.offCommands = new Array(7);

    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
    this.undoCommand = noCommand;
  }

  // setCommand
  setCommand(slot: number, onCommand: Command): void {
    this.onCommands[slot] = onCommand;
  }

  // onButtonWasPushed
  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  // offButtonWasPushed
  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  // undoButtonWasPushed
  undoButtonWasPushed(): void {
    this.undoCommand.undo!();
  }

  // toString
}
