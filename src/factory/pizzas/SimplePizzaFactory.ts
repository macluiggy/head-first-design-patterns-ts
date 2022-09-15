import Pizza from "./Pizza";
import CheesePizza from "./CheesePizza";

import type { Types } from "./Pizza";

export default class SimplePizzaFactory {
  private types: Types;
  constructor(parameters) {
    this.types = {
      cheese: new CheesePizza(),
      // pepperoni: PepperoniPizza,
      // clam: ClamPizza,
      // veggie: VeggiePizza,
    };
  }

  public createPizza(type: string): Pizza {
    return this.types[type] || null;
  }
}
