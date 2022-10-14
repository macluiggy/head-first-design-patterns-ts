import Factory from "./Factory";
import GameProduct from "./GameProduct";
import GodOfWar from "./GodOfWar";
import TheLastOfUs from "./TheLastOfUs";

export default class SonyFactory extends Factory {
  createGame(type: string): GameProduct {
    let game: GameProduct = null as unknown as GameProduct;
    switch (type) {
      case "God of War":
        game = new GodOfWar();
        break;
      case "The Last of Us":
        game = new TheLastOfUs();
        break;
      default:
        throw new Error("Game not found");
    }
    return game;
  }
}
