import ClosedState from "./ClosedState";
import Door from "./Door";
import DoorState from "./DoorState";

export default class LockedState implements DoorState {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  lock(): void {
    console.log("The door is already locked.");
  }
  unlock(): void {
    console.log("The door is unlocked.");
    // this.door.changeState(new ClosedState(this.door));
    this.door.changeState(this.door.getClosedState());
  }
}
