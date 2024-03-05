export default class GumballMachine {
  // final static SOLD_OUT = 0;
  public static SOLD_OUT: string = 'SOLD_OUT';
  public static NO_QUARTER: string = 'NO_QUARTER'
  public static HAS_QUARTER: string = 'HAS_QUARTER';
  public static SOLD: string = 'SOLD';

  private count: number = 0;
  private state: string = GumballMachine.SOLD_OUT;

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

  public turnCrank(): void {
    if (this.state === GumballMachine.SOLD) {
      console.log("Turning twice doesn't get you another gumball!");
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log("You turned but there's no quarter");
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log("You turned, but there are no gumballs");
    } else if (this.state === GumballMachine.HAS_QUARTER) {
      console.log("You turned...");
      this.state = GumballMachine.SOLD;
      this.dispense();
    }
  }

  public dispense(): void {
    if (this.state === GumballMachine.SOLD) {
      console.log("A gumball comes rolling out the slot");
      this.count = this.count - 1;
      if (this.count === 0) {
        console.log("Oops, out of gumballs!");
        this.state = GumballMachine.SOLD_OUT;
      } else {
        this.state = GumballMachine.NO_QUARTER;
      }
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log("You need to pay first");
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log("No gumball dispensed");
    } else if (this.state === GumballMachine.HAS_QUARTER) {
      console.log("No gumball dispensed");
    }
  }
}
