import GumballMachine from "./GumballMachine";

export default class HasQuarterState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("You can't insert another quarter");
  }

  ejectQuarter(): void {
    console.log("Quarter returned");
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank(): void {
    console.log("You turned...");
    this.gumballMachine.setState(this.gumballMachine.getSoldState());
  }

  dispense(): void {
    console.log("No gumball dispensed");
  }
}