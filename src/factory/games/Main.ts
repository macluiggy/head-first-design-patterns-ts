import Factory from "./Factory";
import GameProduct from "./GameProduct";
import SonyFactory from "./SonyFactory";

export default class Main {
  public static main(): void {
    let sonyFactory: Factory = new SonyFactory();
    let game: GameProduct = sonyFactory.orderGame('God of War');
    // console.log(game);
    game = sonyFactory.orderGame('The Last of Us');
  }
}

Main.main();