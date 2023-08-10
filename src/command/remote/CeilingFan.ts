export default class CeilingFan {
  private location: string;
  private level: number;

  static HIGH: number = 3;
  static MEDIUM: number = 2;
  static LOW: number = 1;
  static OFF: number = 0;

  constructor(location: string) {
    this.location = location;
    this.level = CeilingFan.OFF;
  }

  public high(): void {
    this.level = CeilingFan.HIGH;
    console.log(`${this.location} ceiling fan is on high`);
  }

  public medium(): void {
    this.level = CeilingFan.MEDIUM;
    console.log(`${this.location} ceiling fan is on medium`);
  }

  public low(): void {
    this.level = CeilingFan.LOW;
    console.log(`${this.location} ceiling fan is on low`);
  }

  public off(): void {
    this.level = CeilingFan.OFF;
    console.log(`${this.location} ceiling fan is off`);
  }

  public getSpeed(): number {
    return this.level;
  }
}