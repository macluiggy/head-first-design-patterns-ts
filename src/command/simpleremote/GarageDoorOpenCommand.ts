import Command from "./Command";
import GarageDoor from "./GarageDoor";

export default class GarageDoorOpenCommand implements Command {
  private garage: GarageDoor;

  constructor(garage: GarageDoor) {
    this.garage = garage;
  }

  execute(): void {
    this.garage.up();
  }
}
