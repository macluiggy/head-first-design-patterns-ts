import OneState from "./OneState";
import SecondState from "./SecondState";
import State from "./State";

export default class Simple {
  public static main(): void {
    const simple = new Simple();
    simple.first();
    simple.second();
    simple.second();
    simple.first();
  }

  oneState: OneState;
  secondState: SecondState;
  state: State;
  constructor() {
    this.oneState = new OneState(this);
    this.secondState = new SecondState(this);
    this.state = this.oneState;
  }
  first(): void {
    this.state.first();
  }
  second(): void {
    this.state.second();
  }
  setState(state: State): void {
    this.state = state;
  }

  getState(): State {
    return this.state;
  }
  
  getOneState(): OneState {
    return this.oneState;
  }

  getSecondState(): SecondState {
    return this.secondState;
  }
}

Simple.main();