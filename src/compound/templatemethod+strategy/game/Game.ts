export default abstract class Game {
  playGame(): void {
    this.start();
    this.makePlay();
    this.end();
  }

  start(): void {
    console.log("Game is starting");
  }
  abstract makePlay(): void;
  end(): void {
    console.log("Game is ending");
  }
}
