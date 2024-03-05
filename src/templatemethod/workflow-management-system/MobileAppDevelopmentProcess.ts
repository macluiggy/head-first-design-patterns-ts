import SoftwareDevelopmentProcess from "./SoftwareDevelopmentProcess";

export default class MobileAppDevelopmentProcess extends SoftwareDevelopmentProcess {
  test(): void {
    console.log("Testing the mobile app");
  }
  review(): void {
    console.log("Reviewing the mobile app");
  }
  deploy(): void {
    console.log("Deploying the mobile app");
  }
}