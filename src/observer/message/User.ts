import Observer from "./Observer";

export default class User implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(msg: string, sender: string): void {
    console.log(`${this.name} received a message from ${sender}: ${msg}`);
  }
}