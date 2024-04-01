import PaymentStrategy from "./PaymentStrategy";

export default class CreditCardPaymentStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} using credit card`);
  }
}