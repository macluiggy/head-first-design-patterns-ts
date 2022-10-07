import { log } from "console";

export default class Singleton {
  private static uniqueInstance: Singleton;
  counter: number;
  private constructor() {
    this.counter = 0;
  }

  public static getInstance(): Singleton {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton();
    }
    return this.uniqueInstance;
  }
  getDescription(): string {
    return "Singleton";
  }
  addOne(): void {
    this.counter++;
  }
}
let singleton = Singleton.getInstance();
// console.log(singleton)
console.log(singleton.getDescription());
 enum SingletonEnum {
  UNIQUE_INSTANCE
} 

