import DoorState from "./DoorState";
import ClosedState from "./ClosedState";
import LockedState from "./LockedState";

export default class Door implements DoorState {
  private state: DoorState;
  closedState: ClosedState;
  lockedState: LockedState  

  constructor() {
    this.state = new ClosedState(this);
    this.closedState = new ClosedState(this);
    this.lockedState = new LockedState(this);
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
  getClosedState(): ClosedState {
    return this.closedState;
  }
  getLockedState(): LockedState {
    return this.lockedState;
  }
}
