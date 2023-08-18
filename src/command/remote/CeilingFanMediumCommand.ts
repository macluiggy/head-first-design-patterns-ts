import Command from "./Command";
import CeilingFan from "./CeilingFan";

export default class CeilingFanMediumCommand implements Command {
  private prevSpeed: number;
  constructor(private ceilingFan: CeilingFan) {
    this.prevSpeed = CeilingFan.OFF;
  }

  execute(): void {
    this.ceilingFan.medium();
    this.prevSpeed = this.ceilingFan.getSpeed();
  }

  undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high();
        break;
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium();
        break;
      case CeilingFan.LOW:
        this.ceilingFan.low();
        break;
      case CeilingFan.OFF:
        this.ceilingFan.off();
        break;
    }
  }
}