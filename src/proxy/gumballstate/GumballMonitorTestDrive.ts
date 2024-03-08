import GumballMachine from "./GumballMachine";
import GumballMonitor from "./GumballMonitor";

export default class GumballMonitorTestDrive {
  public static main(args: string[] = process.argv): void {
    if (args.length < 4) {
      console.log("GumballMachine <name> <inventory>");
      process.exit(1);
    }
    const location = args[2];
    const count = parseInt(args[3], 10);
    // const gumballMachine = new GumballMachine("Seattle", 112);
    const gumballMachine = new GumballMachine(location, count);
    const monitor = new GumballMonitor(gumballMachine);
    monitor.report();
  }
}

GumballMonitorTestDrive.main();
