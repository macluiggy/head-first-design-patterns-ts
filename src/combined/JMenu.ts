import JMenuItem from "./JMenuItem";

export default class JMenuBar {
  model: any;
  menu: string
  constructor(menu: string) {
    this.menu = menu;
  }
  setText(text: string) {
    // Not implemented
  }
  setValue(value: number) {
    // Not implemented
  }
  add(menu: JMenuItem) {
    // Not implemented
  }
}