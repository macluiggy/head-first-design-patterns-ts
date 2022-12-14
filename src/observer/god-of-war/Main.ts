import Game from "./Game";
import Subscriber from "./Subscriber";
let gamers = [
  {
    name: "John",
    id_game_wishlist: [1, 2],
  },
  {
    name: "Mary",
    id_game_wishlist: [1],
  },
  {
    name: "Peter",
    id_game_wishlist: [],
  },
  {
    name: "Jane",
    id_game_wishlist: [1, 2, 3],
  },
]
let games = [
  {
    id_game: 1,
    name: "God of War",
    price: 60,
    hasDiscount: true,
  },
  {
    id_game: 2,
    name: "The Last of Us",
    price: 50,
    hasDiscount: false,
  },
  {
    id_game: 3,
    name: "Uncharted 4",
    price: 40,
    hasDiscount: true,
  },
  {
    id_game: 4,
    name: "Horizon Zero Dawn",
    price: 30,
    hasDiscount: false,
  },
]
export default class Main {
  public static main(): void {
    for (let i = 0; i < games.length; i++) {
      const game = games[i];
      for (const gamer of gamers) {
        if (gamer.id_game_wishlist.includes(game.id_game)) {
          let gameSubject = new Game(game.price, 0.1, game.name);
          new Subscriber(gameSubject, gamer.name);
          gameSubject.applyDiscount(0.1);
        }
      }
    }
  }
}

Main.main();
