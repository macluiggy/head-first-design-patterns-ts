export default class ActionEvent extends Event {
  model: any;
  constructor() {
    super('11');
    this.model = null;
  }
  setText(text: string) {
    // Not implemented
  }
  setValue(value: number) {
    // Not implemented
  }
  getSource() {
    return this.model;
  }
}