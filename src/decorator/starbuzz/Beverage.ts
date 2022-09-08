export default abstract class Beverage {
  // constructor(parameters) {

  // }
  description = "Unknown Beverage";
  /**
   * getDescription
   */
  public getDescription(): string {
    return this.description;
  }

  /**
   * returns the cost of the beverage
   */
  public abstract cost(): number
}
