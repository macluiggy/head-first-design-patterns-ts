import Circle from "./Circle";
import Elipse from "./Elipse";
import Shape from "./Shape";
import ShapeFactoryAbstract from "./ShapeFactoryAbstract";

export default class ShapeFactory extends ShapeFactoryAbstract {
  public createShape(type: string): Shape {
    let shape: Shape;
    switch (type) {
      case "circle":
        shape = new Circle(5);
        break;
      case "elipse":
        shape = new Elipse(5, 10);
        break;
      default:
        throw new Error("Invalid shape type");
    }
    return shape;
  }
}
