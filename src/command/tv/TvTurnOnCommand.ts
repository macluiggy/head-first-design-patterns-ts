import Tv from "./Tv";
import Command from "./Command";

export default class TvTurnOnCommand implements Command {
  constructor(private tv: Tv) {}
  execute(): void {
    this.tv.turnOn();
  }
}
