import GameProduct from "./GameProduct";

export default abstract class Factory {
  orderGame(type: string): GameProduct {
    let game: GameProduct;
    game = this.createGame(type);
    game.buy();
    game.download();
    game.install();
    game.play();
    
    return game;
  }

  protected abstract createGame(type: string): GameProduct;
}