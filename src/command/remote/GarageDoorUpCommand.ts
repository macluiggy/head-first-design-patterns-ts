import Command from "./Command";
import GarageDoor from "./GarageDoor";

export default class GarageDoorUpCommand implements Command {
  constructor(private garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.up();
  }

  undo(): void {
    this.garageDoor.down();
  }
}