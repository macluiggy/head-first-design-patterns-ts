import GodOfWar from "./GodOfWar";
import Observer from "./Oberver";

export default class Subscribers implements Observer {
  private observers: Observer[] = [];
  private price: number;
  private hasDiscount: boolean;
  private discount: number;
  private godOfWar: GodOfWar;
  name: string;

  constructor(godOfWar: GodOfWar, name: string) {
    this.godOfWar = godOfWar;
    this.name = name;
    this.price = 60;
    this.hasDiscount = false;
    this.discount = 0;
    this.godOfWar.registerObserver(this);
  }

  update(hasDiscount: boolean, price?: number): void {
    if (price) {
      this.price = price;
    }
    this.hasDiscount = hasDiscount;
    this.display();
  }
  display(): void {
    if (this.hasDiscount) {
      console.log(
        `${this.name} your game on your wishlist has a discount! The price is ${this.price}`
      );
    }
  }
}
