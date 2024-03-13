import Dimension from "./Dimension";
import JMenuBar from "./JMenu";

export default class JFrame {
  static defaultLookAndFeelDecorated: boolean;
  static EXIT_ON_CLOSE: string;
  dimension: Dimension;
  menuBar: JMenuBar;
  constructor(title: string) {
    this.title = title;
  }
  title: string;
  setDefaultCloseOperation(action: string) {
    this.action = action;
  }
  action: string;
  getContentPane() {
    return this.contentPane;
  }
  contentPane: any;
  setVisible(visible: boolean) {
    this.visible = visible;
  }
  visible: boolean;
  static setDefaultLookAndFeelDecorated(b: boolean) {
    this.defaultLookAndFeelDecorated = b;
  }
  setSize(dimension: Dimension) {
    this.dimension = dimension;
  }
  setJMenuBar(menuBar: JMenuBar) {
    this.menuBar = menuBar;
  }
}
