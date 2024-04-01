export default abstract class Game {
  playGame(): void {
    this.start();
    this.makePlay();
    this.end();
  }

  abstract start(): void;
  abstract makePlay(): void;
  abstract end(): void;
}
