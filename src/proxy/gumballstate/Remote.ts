export default class Remote {
  public location: string;
  private count: number;

  constructor(location: string, count: number) {
    this.location = location;
    this.count = count;
  }

  public getLocation(): string {
    return this.location;
  }

  public getCount(): number {
    return this.count;
  }
}