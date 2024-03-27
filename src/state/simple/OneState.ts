import Simple from "./Simple";
import State from "./State";

export default class OneState implements State {
  simple: Simple;
  constructor(simple: Simple) {
    this.simple = simple;
  }
  first(): void {
    console.log("already in first state");
  }
  second(): void {
    console.log("moving to second state");
    this.simple.setState(this.simple.getSecondState());
  }
}
