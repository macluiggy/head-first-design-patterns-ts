import BasicCameraApp from "./BasicCameraApp";
import readline from "readline";
import Txt from "./Txt";
import Email from "./Email";
import Social from "./Social";

export default class PhotoWithPhone {
  public static main(): void {
    const cameraApp = new BasicCameraApp();
    this.performOperations(cameraApp);
  }

  public static getSharing(): string {
    console.log("Share with txt (t), email (e), social media (s)?");
    // const scanner = process.openStdin();
    // const appName = scanner.next()
    // scanner.close();
    // return appName;
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let appName = "";
    rl.question("Please enter the sharing method: ", (answer) => {
      // TODO: Replace this with the code you want to execute after getting the input.
      console.log(`Sharing method is: ${answer}`);
      appName = answer;

      rl.close();
    });
    return appName;
  }

  public static performOperations(cameraApp: BasicCameraApp): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Please enter the sharing method: ", (answer) => {
      // TODO: Replace this with the code you want to execute after getting the input.
      console.log(`Sharing method is: ${answer}`);

      switch (answer) {
        case "t":
          cameraApp.setShareStrategy(new Txt());
          break;
        case "e":
          cameraApp.setShareStrategy(new Email());
          break;
        case "s":
          cameraApp.setShareStrategy(new Social());
          break;
        default:
          cameraApp.setShareStrategy(new Txt());
          break;
      }

      cameraApp.take();
      cameraApp.edit();
      cameraApp.save();
      cameraApp.share();
      rl.close();
    });
  }
}

PhotoWithPhone.main();
