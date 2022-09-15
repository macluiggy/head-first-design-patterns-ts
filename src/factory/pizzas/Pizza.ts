import CheesePizza from "./CheesePizza";
export type Types = {
  cheese: CheesePizza;
  // pepperoni: PepperoniPizza;
  // clam: ClamPizza;
  // veggie: VeggiePizza;
};

export default class Pizza {
  public prepare(): void {}
  public bake(): void {}
  public cut(): void {}
  public box(): void {}
}
