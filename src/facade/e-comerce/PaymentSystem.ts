export default class PaymentSystem {
  verifyPayment(order: string): void {
    console.log("Verifying payment for " + order);
  }
  
  processPayment(order: string): void {
    console.log("Processing payment for " + order);
  }
  
  shipOrder(order: string): void {
    console.log("Shipping order for " + order);
  }
}