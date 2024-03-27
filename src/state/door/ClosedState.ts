import Door from "./Door";
import DoorState from "./DoorState";
import LockedState from "./LockedState";

export default class ClosedState implements DoorState {
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  lock(): void {
    console.log("The door is locked.");
    this.door.changeState(new LockedState(this.door));
  }
  unlock(): void {
    console.log("The door is already unlocked.");
  }
}
