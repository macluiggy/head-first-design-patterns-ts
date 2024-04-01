import GameStrategy from "./GameStrategy";

export default class AggressiveStrategy implements GameStrategy {
  play(): void {
    console.log("Aggressive strategy");
  }
}