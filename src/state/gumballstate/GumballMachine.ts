import HasQuarterState from "./HasQuarterState";
import NoQuarterState from "./NoQuarterState";
import SoldOutState from "./SoldOutState";
import SoldState from "./SoldState";
import State from "./State";
import WinnerState from "./WinnerState";

export default class GumballMachine {
  private soldOutState: State;
  private noQuarterState: State;
  private hasQuarterState: State;
  private soldState: State;
  private winnerState: State;

  private state: State;
  private count: number = 0;

  constructor(numberGumballs: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);

    this.count = numberGumballs;
    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  public insertQuarter(): void {
    this.state.insertQuarter();
  }

  public ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  public turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  public setState(state: State): void {
    this.state = state;
  }

  public releaseBall(): void {
    console.log("A gumball comes rolling out the slot...");
    if (this.count !== 0) {
      this.count = this.count - 1;
    }
  }

  public getCount(): number {
    return this.count;
  }

  public refill(count: number): void {
    this.count = count;
    this.state = this.noQuarterState;
  }

  public getSoldOutState(): State {
    return this.soldOutState;
  }

  public getNoQuarterState(): State {
    return this.noQuarterState;
  }

  public getHasQuarterState(): State {
    return this.hasQuarterState;
  }

  public getSoldState(): State {
    return this.soldState;
  }

  public getWinnerState(): State {
    return this.winnerState;
  }

  public toString(): string {
    let result: string = "\nMighty Gumball, Inc.";
    result += "\nJava-enabled Standing Gumball Model #2004";
    result += "\nInventory: " + this.count + " gumball";
    if (this.count !== 1) {
      result += "s";
    }
    result += "\n";
    result += "Machine is " + this.state + "\n";
    return result;
  }
}