import ControllerInterface from "./ControllerInterface";
import DJView from "./DJView";
import HeartModelInterface from "./HeartModelInterface";

export default class HeartController implements ControllerInterface {
  model: HeartModelInterface;
  view: DJView;
  constructor(model: HeartModelInterface) {
    this.model = model;
    this.view = new DJView(this, model);
    this.view.createView();
    this.view.createControls();
    this.view.disableStopMenuItem();
    this.view.enableStartMenuItem();
    this.model.initialize();
  }
  start(): void {
    throw new Error("Method not implemented.");
  }
  stop(): void {
    throw new Error("Method not implemented.");
  }
  increaseBPM(): void {
    throw new Error("Method not implemented.");
  }
  decreaseBPM(): void {
    throw new Error("Method not implemented.");
  }
  setBPM(bpm: number): void {
    throw new Error("Method not implemented.");
  }
}