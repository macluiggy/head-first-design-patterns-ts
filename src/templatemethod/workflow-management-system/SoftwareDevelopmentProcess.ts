export default abstract class SoftwareDevelopmentProcess {
  abstract test(): void;
  abstract review(): void;
  abstract deploy(): void;

  public executeProcess(): void {
    this.test();
    this.review();
    this.deploy();
  }
}