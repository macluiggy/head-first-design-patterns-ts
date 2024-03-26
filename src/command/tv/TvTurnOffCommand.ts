import Command from "./Command";
import Tv from "./Tv";

export default class TvTurnOffCommand implements Command {
  constructor(private tv: Tv) {}
  execute(): void {
    this.tv.turnOff();
  }
}
