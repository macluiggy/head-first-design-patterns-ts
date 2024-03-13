import GridLayout from "./GridLayout";

export default class JPanel {
  model: any;
  gridLayout: GridLayout
  constructor(gridLayout: GridLayout) {
    this.gridLayout = gridLayout;
  }
}