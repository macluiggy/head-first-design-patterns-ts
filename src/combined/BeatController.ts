import ControllerInterface from "./ControllerInterface";
import BeatModelInterface from "./BeatModelInterface";
import DJView from "./DJView";

export default class BeatController implements ControllerInterface {
  model: BeatModelInterface;
  view: DJView;

  constructor(model: BeatModelInterface) {
    this.model = model;
    this.view = new DJView(this, model);
    this.view.createView();
    this.view.createControls();
    this.view.disableStopMenuItem();
    this.view.enableStartMenuItem();
    this.model.initialize();
  }

  start(): void {
    this.model.on();
    this.view.disableStartMenuItem();
    this.view.enableStopMenuItem();
  }

  stop(): void {
    this.model.off();
    this.view.disableStopMenuItem();
    this.view.enableStartMenuItem();
  }

  increaseBPM(): void {
    let bpm: number = this.model.getBPM();
    this.model.setBPM(bpm + 1);
  }

  decreaseBPM(): void {
    let bpm: number = this.model.getBPM();
    this.model.setBPM(bpm - 1);
  }

  setBPM(bpm: number): void {
    this.model.setBPM(bpm);
  }

  getBPM(): number {
    return this.model.getBPM();
  }
}
