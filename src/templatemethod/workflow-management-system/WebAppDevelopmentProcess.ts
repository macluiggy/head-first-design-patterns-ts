import SoftwareDevelopmentProcess from "./SoftwareDevelopmentProcess";

export default class WebAppDevelopmentProcess extends SoftwareDevelopmentProcess {
  test(): void {
    console.log("Testing the web app");
  }
  review(): void {
    console.log("Reviewing the web app");
  }
  deploy(): void {
    console.log("Deploying the web app");
  }
}
