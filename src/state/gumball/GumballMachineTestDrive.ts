import GumballMachine from "./GumballMachine";

export default class GumballMachineTestDrive {
  static main(): void {
    const gumballMachine: GumballMachine = new GumballMachine(5);
    console.log(gumballMachine);
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log(gumballMachine);
    gumballMachine.insertQuarter();
    gumballMachine.ejectQuarter();
    gumballMachine.turnCrank();
    console.log(gumballMachine);
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.ejectQuarter();
    console.log(gumballMachine);
    gumballMachine.insertQuarter();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log(gumballMachine);
  }
}

GumballMachineTestDrive.main();
