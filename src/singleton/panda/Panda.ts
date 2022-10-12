import { log } from "console";

export default class Panda {
  private static uniqueInstance: Panda = new Panda();
  private count = 0;
  private constructor() {}
  public static getInstance(): Panda {
    return this.uniqueInstance;
  }
  getCount(): number {
    this.count++;
    return this.count;
  }
}

let panda1 = Panda.getInstance();
console.log(panda1.getCount());

let panda2 = Panda.getInstance();
console.log(panda2.getCount());