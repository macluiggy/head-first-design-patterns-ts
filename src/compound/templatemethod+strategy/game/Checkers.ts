import Game from "./Game";
import GameStrategy from "./GameStrategy";

export default class Checkers extends Game {
  private gameStrategy: GameStrategy;

  constructor(gameStrategy: GameStrategy) {
    super();
    this.gameStrategy = gameStrategy;
  }

  setStrategy(gameStrategy: GameStrategy): void {
    this.gameStrategy = gameStrategy;
  }

  makePlay(): void {
    console.log("Playing checkers");

    this.gameStrategy.play();
  }
}
