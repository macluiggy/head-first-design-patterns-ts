import ShareStrategy from "./ShareStrategy";

export default abstract class PhoneCameraApp {
  private shareStrategy: ShareStrategy;

  public setShareStrategy(shareStrategy: ShareStrategy): void {
    this.shareStrategy = shareStrategy;
  }

  public share(): void {
    this.shareStrategy.share();
  }

  public take(): void {
    console.log("Taking the photo");
  }

  public save(): void {
    console.log("Saving the photo");
  }

  public abstract edit(): void;
}
