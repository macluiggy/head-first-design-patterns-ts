import PaymentStrategy from "./PaymentStrategy";

export default class PayPalPaymentStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} using PayPal`);
  }
}