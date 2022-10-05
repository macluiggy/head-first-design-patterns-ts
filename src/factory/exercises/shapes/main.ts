import ShapeFactory from "./ShapeFactory";

export default class Main {
  public static main(): void {
    let circleStore = new ShapeFactory();
    circleStore.showDimensions("circle");

    let elipseStore = new ShapeFactory();
    elipseStore.showDimensions("elipse");
  }
}

Main.main();
