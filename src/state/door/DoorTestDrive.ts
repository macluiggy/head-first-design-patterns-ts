
import Door from "./Door";
export default class DoorTestDrive {
  public static main(): void {
    const door = new Door();
    door.lock();
    door.unlock();
    door.unlock();
    door.lock();
    door.lock();
  }
}

DoorTestDrive.main();
