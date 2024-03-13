import BeatModel from './BeatModel';
import BeatController from './BeatController';
import BeatModelInterface from './BeatModelInterface';
import ControllerInterface from './ControllerInterface';

export default class DJTestDrive {
  static main(): void {
    let model: BeatModelInterface = new BeatModel();
    let controller: ControllerInterface = new BeatController(model);
  }
}

DJTestDrive.main();
