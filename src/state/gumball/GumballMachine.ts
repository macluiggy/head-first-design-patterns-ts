export default class GumballMachine {
  // final static SOLD_OUT = 0;
  public static SOLD_OUT: number = 0;
  public static NO_QUARTER: number = 1;
  public static HAS_QUARTER: number = 2;
  public static SOLD: number = 3;

  private count: number = 0;
  private state: number = 0;

  constructor(count: number) {
    this.count = count;
    if (count > 0) {
      this.state = GumballMachine.NO_QUARTER;
    }
  }

  public insertQuarter(): void {
    if (this.state === GumballMachine.HAS_QUARTER) {
      console.log("You can't insert another quarter");
    } else if (this.state === GumballMachine.NO_QUARTER) {
      this.state = GumballMachine.HAS_QUARTER;
      console.log("You inserted a quarter");
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log("You can't insert a quarter, the machine is sold out");
    } else if (this.state === GumballMachine.SOLD) {
      console.log("Please wait, we're already giving you a gumball");
    }
  }

  public ejectQuarter(): void {
    if (this.state === GumballMachine.HAS_QUARTER) {
      console.log("Quarter returned");
      this.state = GumballMachine.NO_QUARTER;
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log("You haven't inserted a quarter");
    } else if (this.state === GumballMachine.SOLD) {
      console.log("Sorry, you already turned the crank");
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log("You can't eject, you haven't inserted a quarter yet");
    }
  }
}
