import GodOfWar from "./GodOfWar";
import Subscriber from "./Subscriber";
let gamers = [
  {
    name: "John",
    isSubscribed: true,
  },
  {
    name: "Mary",
    isSubscribed: false,
  },
  {
    name: "Peter",
    isSubscribed: true,
  },
  {
    name: "Jane",
    isSubscribed: false,
  },
]
export default class Main {
  public static main(): void {
    const godOfWar = new GodOfWar();
    for (const gamer of gamers) {
      if (gamer.isSubscribed) {
        new Subscriber(godOfWar, gamer.name);
      }
    }
    godOfWar.applyDiscount(0.5);
  }
}

Main.main();
