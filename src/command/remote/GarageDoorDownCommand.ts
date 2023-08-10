import Command from "./Command";
import GarageDoor from "./GarageDoor";

export default class GarageDoorDownCommand implements Command {
  constructor(private garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.down();
  }
}
