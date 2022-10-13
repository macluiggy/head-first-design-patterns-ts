import GodOfWar from "./GodOfWar";
import Subscribers from "./Subscribers";

export default class Main {
  public static main(): void {
    const godOfWar = new GodOfWar();
    new Subscribers(godOfWar);
    // subscriber.update(true, 50); // quien aplica el descuente es el sujeto
    godOfWar.applyDiscount(0.5);
    godOfWar.disableDiscount();
  }
}

Main.main();
