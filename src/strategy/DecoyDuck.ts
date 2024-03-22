import Duck from "./Duck";
import FlyNoWay from "./FlyNoWay";
import MuteQuack from "./MuteQuack";

export default class DecoyDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new MuteQuack());
  }
  public display(): void {
    console.log("I'm a duck Decoy");
  }
}
