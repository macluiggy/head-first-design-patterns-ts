import Command from "./Command";
import CeilingFan from "./CeilingFan";

export default class CeilingFanOffCommand implements Command {
  constructor(private ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.ceilingFan.off();
  }
}
