import Command from "./Command";
import Hottub from "./Hottub";

export default class HottubOffCommand implements Command {
  hottub: Hottub;

  constructor(hottub: Hottub) {
    this.hottub = hottub;
  }

  execute(): void {
    this.hottub.bubblesOff();
    this.hottub.jetsOff();
    this.hottub.setTemperature(98);
    this.hottub.off();
  }

  undo(): void {
    this.hottub.on();
  }
}