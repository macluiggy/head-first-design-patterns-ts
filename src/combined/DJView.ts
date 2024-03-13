import BeatObserver from "./BeatObserver";
import BPMObserver from "./BPMObserver";
import ActionListener from "./ActionListener";
import BeatModelInterface from "./BeatModelInterface";
import ControllerInterface from "./ControllerInterface";
import JFrame from "./JFrame";
import JPanel from "./JPanel";
import JLabel from "./JLabel";
import JButton from "./JButton";
import JMenuBar from "./JMenuBar";
import JMenu from "./JMenu";
import JMenuItem from "./JMenuItem";
import JTextField from "./JTextField";
import ActionEvent from "./ActionEvent";

export default class DJView
  implements ActionListener, BeatObserver, BPMObserver
{
  model: BeatModelInterface;
  controller: ControllerInterface;
  viewFrame: JFrame;
  viewPanel: JPanel;
  beatBar: JLabel;
  bpmOutputLabel: JLabel;
  bpmTextField: JTextField;
  setBPMButton: JButton;
  increaseBPMButton: JButton;
  decreaseBPMButton: JButton;
  menuBar: JMenuBar;
  menu: JMenu;
  startMenuItem: JMenuItem;
  stopMenuItem: JMenuItem;
  

  constructor(controller: ControllerInterface, model: BeatModelInterface) {
    this.controller = controller;
    this.model = model;
    this.model.registerObserver(this);
    this.model.registerObserver(this);
  }
  createControls(): void {
    // Create all Swing components here
  }
  enableStopMenuItem(): void {
    this.stopMenuItem.setEnabled(true);
  }
  disableStopMenuItem(): void {
    this.stopMenuItem.setEnabled(false);
  }
  enableStartMenuItem(): void {
    this.startMenuItem.setEnabled(true);
  }
  disableStartMenuItem(): void {
    this.startMenuItem.setEnabled(false);
  }
  createView(): void {}
  actionPerformed(event: ActionEvent): void {
    if (event.getSource() === this.setBPMButton) {
      let bpm: number = parseInt(this.bpmTextField.getText());
      this.controller.setBPM(bpm);
    } else if (event.getSource() === this.increaseBPMButton) {
      this.controller.increaseBPM();
    } else if (event.getSource() === this.decreaseBPMButton) {
      this.controller.decreaseBPM();
    }
  }
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
