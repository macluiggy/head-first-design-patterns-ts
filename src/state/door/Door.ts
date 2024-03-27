import DoorState from "./DoorState";
import ClosedState from "./ClosedState";

export default class Door implements DoorState {
  private state: DoorState;

  constructor() {
    this.state = new ClosedState(this);
  }
  changeState(newState: DoorState): void {
    this.state = newState;
  }
  lock(): void {
    this.state.lock();
  }
  unlock(): void {
    this.state.unlock();
  }
}
