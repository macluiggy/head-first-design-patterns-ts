import GameStrategy from "./GameStrategy";

export default class DefensiveStrategy implements GameStrategy {
  play(): void {
    console.log("Defensive strategy");
  }
}
