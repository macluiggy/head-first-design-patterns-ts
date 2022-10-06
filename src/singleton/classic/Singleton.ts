export default class Singleton {
  private static uniqueInstance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton();
    }
    return this.uniqueInstance;
  }
  getDescription(): string {
    return "Singleton";
  }
}

let singleton = Singleton.getInstance();
console.log(singleton.getDescription());
