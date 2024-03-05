export default abstract class SoftwareDevelopmentProcess {
  abstract test(): void;
  abstract review(): void;
  abstract deploy(): void;

  public executeProcess(): void {
    if (!this.isLocalDevelopment()) {
      this.test();
      this.review();
      this.deploy();
    }
  }

  public isLocalDevelopment(): boolean {
    return Math.random() < 0.5;
  }
}
