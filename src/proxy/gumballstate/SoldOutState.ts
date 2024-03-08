import GumballMachine from "./GumballMachine";
import State from "./State";

export default class SoldOutState implements State {
  constructor(private gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  insertQuarter(): void {
    console.log("You can't insert a quarter, the machine is sold out");
  }
  ejectQuarter(): void {
    console.log("You can't eject, you haven't inserted a quarter yet");
  }
  turnCrank(): void {
    console.log("You turned, but there are no gumballs");
  }
  dispense(): void {
    console.log("No gumball dispensed");
  }
  refill(): void {
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }
  toString(): string {
    return "sold out";
  }
}
