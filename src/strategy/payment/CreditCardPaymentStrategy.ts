import PaymentStrategy from "./PaymentStrategy";

export default class CreditCardPaymentStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paying ${amount} using Credit Card.`);
  }
}