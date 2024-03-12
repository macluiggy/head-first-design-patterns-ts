export default class JFrame {
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
}