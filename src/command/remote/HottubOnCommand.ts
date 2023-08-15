import Command from "./Command";
import Hottub from "./Hottub";

export default class HottubOnCommand implements Command {
  hottub: Hottub;

  constructor(hottub: Hottub) {
    this.hottub = hottub;
  }

  execute(): void {
    this.hottub.on();
    this.hottub.heat();
    this.hottub.circulate();
    this.hottub.setTemperature(105);
    this.hottub.bubblesOn();
  }

  undo(): void {
    this.hottub.off();
  }
}