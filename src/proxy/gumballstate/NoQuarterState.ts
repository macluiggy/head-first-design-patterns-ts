import GumballMachine from "./GumballMachine";
import State from "./State";

export default class NoQuarterState implements State {
  gumballMachine: GumballMachine;
  private static readonly serialVersionUID = 2;

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

  refill(): void {
    console.log("Can't refill now");
  }
}
