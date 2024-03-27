import Simple from "./Simple";
import State from "./State";

export default class SecondState implements State {
  simple: Simple;
  constructor(simple: Simple) {
    this.simple = simple;
  }
  first(): void {
    console.log("moving to first state");
    this.simple.setState(this.simple.getOneState());
  }
  second(): void {
    console.log("already in second state");
  }
}
