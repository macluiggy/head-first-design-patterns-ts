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
import Dimension from "./Dimension";
import GridLayout from "./GridLayout";
import SwingConstants from "./SwingConstants";

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
  controlFrame: JFrame;
  controlPanel: JPanel;

  constructor(controller: ControllerInterface, model: BeatModelInterface) {
    this.controller = controller;
    this.model = model;
    this.model.registerObserver(this);
    this.model.registerObserver(this);
  }
  createControls(): void {
    // Create all Swing components here
    //     // Create all Swing components here
    //     JFrame.setDefaultLookAndFeelDecorated(true);
    //     controlFrame = new JFrame("Control");
    //     controlFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    //     controlFrame.setSize(new Dimension(100, 80));

    //     controlPanel = new JPanel(new GridLayout(1, 2));

    //     menuBar = new JMenuBar();
    //     menu = new JMenu("DJ Control");
    //     startMenuItem = new JMenuItem("Start");
    //     menu.add(startMenuItem);
    //     startMenuItem.addActionListener((event) -> controller.start());
    //     // was....
    //     /*
    //     startMenuItem.addActionListener(new ActionListener() {
    //         public void actionPerformed(ActionEvent event) {
    //             controller.start();
    //         }
    //     });
    //     */
    //     stopMenuItem = new JMenuItem("Stop");
    //     menu.add(stopMenuItem);
    //     stopMenuItem.addActionListener((event) -> controller.stop());
    //     // was...
    //     /*
    //     stopMenuItem.addActionListener(new ActionListener() {
    //         public void actionPerformed(ActionEvent event) {
    //             controller.stop();
    //         }
    //     });
    //     */
    //     JMenuItem exit = new JMenuItem("Quit");
    //     exit.addActionListener((event) -> System.exit(0));
    //     // was...
    //     /*
    //     exit.addActionListener(new ActionListener() {
    //         public void actionPerformed(ActionEvent event) {
    //             System.exit(0);
    //         }
    //     });
    //     */

    //     menu.add(exit);
    //     menuBar.add(menu);
    //     controlFrame.setJMenuBar(menuBar);

    //     bpmTextField = new JTextField(2);
    //     bpmLabel = new JLabel("Enter BPM:", SwingConstants.RIGHT);
    //     setBPMButton = new JButton("Set");
    //     setBPMButton.setSize(new Dimension(10,40));
    //     increaseBPMButton = new JButton(">>");
    //     decreaseBPMButton = new JButton("<<");
    //     setBPMButton.addActionListener(this);
    //     increaseBPMButton.addActionListener(this);
    //     decreaseBPMButton.addActionListener(this);

    //     JPanel buttonPanel = new JPanel(new GridLayout(1, 2));

    // buttonPanel.add(decreaseBPMButton);
    // buttonPanel.add(increaseBPMButton);

    //     JPanel enterPanel = new JPanel(new GridLayout(1, 2));
    //     enterPanel.add(bpmLabel);
    //     enterPanel.add(bpmTextField);
    //     JPanel insideControlPanel = new JPanel(new GridLayout(3, 1));
    //     insideControlPanel.add(enterPanel);
    //     insideControlPanel.add(setBPMButton);
    //     insideControlPanel.add(buttonPanel);
    //     controlPanel.add(insideControlPanel);

    //     bpmLabel.setBorder(BorderFactory.createEmptyBorder(5,5,5,5));
    //     bpmOutputLabel.setBorder(BorderFactory.createEmptyBorder(5,5,5,5));

    //     controlFrame.getRootPane().setDefaultButton(setBPMButton);
    //     controlFrame.getContentPane().add(controlPanel, BorderLayout.CENTER);

    //     controlFrame.pack();
    //     controlFrame.setVisible(true);
    JFrame.setDefaultLookAndFeelDecorated(true);
    this.controlFrame = new JFrame("Control");
    this.controlFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    this.controlFrame.setSize(new Dimension(100, 80));

    this.controlPanel = new JPanel(new GridLayout(1, 2));
    
    this.menuBar = new JMenuBar();
    this.menu = new JMenu("DJ Control");
    this.startMenuItem = new JMenuItem("Start");
    this.menu.add(this.startMenuItem);
    this.startMenuItem.addActionListener((event) => this.controller.start());
  
    this.stopMenuItem = new JMenuItem("Stop");
    this.menu.add(this.stopMenuItem);
    this.stopMenuItem.addActionListener((event) => this.controller.stop());

    let exit = new JMenuItem("Quit");
    exit.addActionListener((event) => process.exit(0));

    this.menu.add(exit);
    this.menuBar.add(this.menu);
    this.controlFrame.setJMenuBar(this.menuBar);

    this.bpmTextField = new JTextField(2);
    let bpmLabel = new JLabel("Enter BPM:", SwingConstants.RIGHT);
    
  }
  enableStopMenuItem(): void {
    this.stopMenuItem.setEnabled(true);
  }
  disableStopMenuItem(): void {
    console.log(this.stopMenuItem);

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
