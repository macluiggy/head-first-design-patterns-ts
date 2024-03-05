import InventorySystem from "./InventorySystem";
import PaymentSystem from "./PaymentSystem";
import ShippingSystem from "./ShippingSystem";

export default class OrderFacade {
  private paymentSystem: PaymentSystem;
  private inventorySystem: InventorySystem;
  private shippingSystem: ShippingSystem;
  constructor() {
    this.paymentSystem = new PaymentSystem();
    this.inventorySystem = new InventorySystem();
    this.shippingSystem = new ShippingSystem();

  }
  placeOrder(order: string): void {
    console.log("Place order for " + order);
    this.inventorySystem.takeOrder(order);
    this.paymentSystem.verifyPayment(order);
    this.paymentSystem.processPayment(order);
    this.inventorySystem.processOrder(order);
    this.paymentSystem.shipOrder(order);
    this.shippingSystem.shipOrder(order);
  }
}