import WebAppDevelopmentProcess from "./WebAppDevelopmentProcess";
import MobileAppDevelopmentProcess from "./MobileAppDevelopmentProcess";

export default class WorkflowManagementSystemTestDrive {
  static main(): void {
    const webAppDevelopmentProcess: WebAppDevelopmentProcess = new WebAppDevelopmentProcess();
    const mobileAppDevelopmentProcess: MobileAppDevelopmentProcess = new MobileAppDevelopmentProcess();
    console.log("\nWeb App Development Process:");
    webAppDevelopmentProcess.executeProcess();
    console.log("\nMobile App Development Process:");
    mobileAppDevelopmentProcess.executeProcess();
  }
}

WorkflowManagementSystemTestDrive.main();
