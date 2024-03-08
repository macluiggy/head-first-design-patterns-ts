import GumballMachine from "./GumballMachine";
import GumballMonitor from "./GumballMonitor";

export default class GumballMonitorTestDrive {
  public static main(): void {
    if (process.argv.length < 2) {
      console.log("GumballMachine <name> <inventory>");
      process.exit(1);
    }
    const location = process.argv[2];
    const count = parseInt(process.argv[3]);
    // const gumballMachine = new GumballMachine("Seattle", 112);
    const gumballMachine = new GumballMachine(location, count);
    const monitor = new GumballMonitor(gumballMachine);
    monitor.report();
  }
}

GumballMonitorTestDrive.main();
