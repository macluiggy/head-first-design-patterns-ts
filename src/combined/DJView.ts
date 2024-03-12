import BeatObserver from "./BeatObserver";
import BPMObserver from "./BPMObserver";
import ActionListener from "./ActionListener";
import BeatModelInterface from "./BeatModelInterface";
import ControllerInterface from "./ControllerInterface";
import JFrame from "./JFrame";
import JPanel from "./JPanel";
import JLabel from "./JLabel";

export default class DJView
  implements ActionListener, BeatObserver, BPMObserver
{
  model: BeatModelInterface;
  controller: ControllerInterface;
  viewFrame: JFrame;
  viewPanel: JPanel;
  beatBar: JLabel;
  bpmOutputLabel: JLabel;

  constructor(controller: ControllerInterface, model: BeatModelInterface) {
    this.controller = controller;
    this.model = model;
    this.model.registerObserver(this);
    this.model.registerObserver(this);
  }
  createView(): void {}
  actionPerformed(): void {}
  updateBPM(): void {
    let bpm: number = this.model.getBPM();
    if (bpm === 0) {
      this.bpmOutputLabel.setText("offline");
    } else {
      this.bpmOutputLabel.setText("Current BPM: " + this.model.getBPM());
    }
  }
  updateBeat(): void {
    this.beatBar.setValue(100);
  }
}
