import GumballMachine from "./GumballMachine";
import State from "./State";
type Random = number;
export default class HasQuarterState implements State {
  gumballMachine: GumballMachine;
  // Random randomWinner = new Random(System.currentTimeMillis());
  randomWinner: Random = Math.floor(Math.random() * 10);

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

  // turnCrank(): void {
  //   console.log("You turned...");
  //   this.gumballMachine.setState(this.gumballMachine.getSoldState());
  // }
  turnCrank(): void {
    console.log("You turned...");
    if (this.randomWinner === 0 && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }

  dispense(): void {
    console.log("No gumball dispensed");
  }

  refill(): void {
    console.log("Can't refill now");
  }
}
