import Command from "./Command";
import CeilingFan from "./CeilingFan";

export default class CeilingFanOnCommand implements Command {
  constructor(private ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.ceilingFan.high();
  }

  undo(): void {
    this.ceilingFan.off();
  }
}
