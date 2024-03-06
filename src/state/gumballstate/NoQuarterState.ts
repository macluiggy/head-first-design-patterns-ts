import GumballMachine from "./GumballMachine";

export default class NoQuarterState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("You inserted a quarter");
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter(): void {
    console.log("You haven't inserted a quarter");
  }

  turnCrank(): void {
    console.log("You turned, but there's no quarter");
  }

  dispense(): void {
    console.log("You need to pay first");
  }
}