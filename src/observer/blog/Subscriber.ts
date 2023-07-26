import Observer from "./Observer";

export default class Subscriber implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(...args: any[]): void {
    console.log(
      `Subscriber ${this.name} received the following update: ${args.join(
        ', '
      )}`
    );
  }
}