type Size = "TALL" | "GRANDE" | "VENTI";
export type SizeCosts = {
  TALL: number;
  GRANDE: number;
  VENTI: number;
}
export default abstract class Beverage {
  public size: Size;
  constructor() {
    this.size = "TALL";
  }
  description = "Unknown Beverage";
  /**
   * getDescription
   */
  public getDescription(): string {
    return this.description;
  }

  public setSize(size: Size): void {
    this.size = size;
  }

  public getSize(): Size {
    return this.size
  }
  /**
   * returns the cost of the beverage
   */
  public abstract cost(): number;
}
