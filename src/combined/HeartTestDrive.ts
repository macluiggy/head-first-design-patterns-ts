import HeartModel from './HeartModel';
import HeartController from './HeartController';
import ControllerInterface from './ControllerInterface';

export default class HeartTestDrive {
  static main(): void {
    let model: HeartModel = new HeartModel();
    let controller: ControllerInterface = new HeartController(model);
  }
}

HeartTestDrive.main();