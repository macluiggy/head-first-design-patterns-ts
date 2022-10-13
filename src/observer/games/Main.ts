import Game from "./Game";
import Gamer from "./Gamer";
let gamers = [
  {
    name: "John",
    id_game_wishlist: [1, 2, 3, 4, 5],
  },
  {
    name: "Mary",
    id_game_wishlist: [1, 5],
  },
  {
    name: "Peter",
    id_game_wishlist: [],
  },
  {
    name: "Jane",
    id_game_wishlist: [1, 2, 3],
  },
];
let games = [
  {
    id_game: 1,
    name: "God of War",
    price: 60,
    hasDiscount: true,
    discount: 0.1,
  },
  {
    id_game: 2,
    name: "The Last of Us",
    price: 50,
    hasDiscount: false,
    discount: 0.9,
  },
  {
    id_game: 3,
    name: "Uncharted 4",
    price: 40,
    hasDiscount: true,
    discount: 0.2,
  },
  {
    id_game: 4,
    name: "Horizon Zero Dawn",
    price: 30,
    hasDiscount: false,
    discount: 0.8,
  },
  {
    id_game: 5,
    name: "Fall Guys",
    price: 20,
    hasDiscount: true,
    discount: 1,
  },
];
export default class Main {
  public static main(): void {
    for (let i = 0; i < games.length; i++) {
      const game = games[i];
      for (const gamer of gamers) {
        if (gamer.id_game_wishlist.includes(game.id_game)) {
          let gameSubject = new Game(game.price, 0.1, game.name);
          new Gamer(gameSubject, gamer.name);
          gameSubject.applyDiscount(game.discount);
        }
      }
    }
  }
}

Main.main();
