import Order from "./Order";
import OrderFacade from "./OrderFacade";

export default class EComerceTestDrive {
  static main(): void {
    const order: Order = new Order("My Order");
    const eComerceFacade: OrderFacade = new OrderFacade();
    eComerceFacade.placeOrder(order.getName());
  }
}

EComerceTestDrive.main();