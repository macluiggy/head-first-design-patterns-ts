export default class JMenuItem {
  model: any;
  menuItem:string
  constructor(menuItem: string) {
    this.menuItem = menuItem;
  }
  setText(text: string) {
    // Not implemented
  }
  setValue(value: number) {
    // Not implemented
  }

  setEnabled(enabled: boolean) {}

  addActionListener(listener: (event: any) => void) {
    // Not implemented
  }
}
