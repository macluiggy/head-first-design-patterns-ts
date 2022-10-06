import { log } from "console";

export default class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueInstance: ChocolateBoiler;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public static getInstance(): ChocolateBoiler {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new ChocolateBoiler();
    }
    return this.uniqueInstance;
  }

  public fill(): void {
    if (this.isEmpty()) {
      this.empty = false;
      this.boiled = false;
    }
  }

  public drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      this.empty = true;
    }
  }

  public boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      this.boiled = true;
    }
  }

  public isEmpty(): boolean {
    return this.empty;
  }

  public isBoiled(): boolean {
    return this.boiled;
  }
}

let boiler1 = ChocolateBoiler.getInstance()
boiler1.fill();

console.log(boiler1.isEmpty());
log(boiler1.isBoiled());

let boiler2 = ChocolateBoiler.getInstance()
boiler2.boil();
console.log(boiler2.isEmpty());
console.log(boiler2.isBoiled());


boiler2.drain();