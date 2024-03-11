import GumballMachine from "./GumballMachine";

export default class GumballMachineTestDrive {
  static main(args = process.argv.slice(2)): void {
    let count = 0;
    if (args.length < 2) {
      console.log("GumballMachine <name> <inventory>");
      process.exit(1);
    }
    try {
      count = parseInt(args[1]);
      const gumballMachine = new GumballMachine(args[0], count);

    } catch (error) {
      console.log("Invalid inventory number");
      process.exit(1);
    }
    // const gumballMachine = new GumballMachine(5);

    // console.log(gumballMachine);

    // gumballMachine.insertQuarter();
    // gumballMachine.turnCrank();

    // console.log(gumballMachine);

    // gumballMachine.insertQuarter();
    // gumballMachine.ejectQuarter();
    // gumballMachine.turnCrank();

    // console.log(gumballMachine);

    // gumballMachine.insertQuarter();
    // gumballMachine.turnCrank();
    // gumballMachine.insertQuarter();
    // gumballMachine.turnCrank();
    // gumballMachine.ejectQuarter();

    // console.log(gumballMachine);

    // gumballMachine.insertQuarter();
    // gumballMachine.insertQuarter();
    // gumballMachine.turnCrank();
    // gumballMachine.insertQuarter();
    // gumballMachine.turnCrank();
    // gumballMachine.insertQuarter();
    // gumballMachine.turnCrank();

    // console.log(gumballMachine);
  }
}

GumballMachineTestDrive.main();