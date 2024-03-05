export default class InventorySystem {
  takeOrder(order: string): void {
    console.log("Taking order for " + order);
  }

  processOrder(order: string): void {
    console.log("Processing order for " + order);
  }
}
