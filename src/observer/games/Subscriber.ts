import Game from "./Game";
import Observer from "./Oberver";

export default class Subscriber implements Observer {
  private observers: Observer[] = [];
  private price: number;
  private hasDiscount: boolean;
  private discount: number;
  private game: Game;
  private name: string;
  private gameName: string

  constructor(game: Game, name: string) {
    this.game = game;
    this.price = 0
    this.hasDiscount = false;
    this.discount = 0;
    this.game.registerObserver(this);
    this.name = name;
    this.gameName = "";
  }

  update(hasDiscount: boolean, price: number, gameName: string): void {
    if (price || price >= 0) {
      this.price = price;
    }
    if (gameName) {
      this.gameName = gameName;
    }
    this.hasDiscount = hasDiscount;
    this.display();
  }
  display(): void {
    if (this.price == 0) {
      console.log(`${this.name} Your game ${this.gameName} on your wishlist is now for free!`);
      return
    }
    if (this.hasDiscount) {
      console.log(
        `${this.name} Your game ${this.gameName} on your wishlist has a discount! The price is ${this.price}`
      );
    }
  }
}
