import PaymentFactory from "./PaymentFactory";

export default class PaymentProcessor {
  private paymentFactory: PaymentFactory;

  constructor(paymentFactory: PaymentFactory) {
    this.paymentFactory = paymentFactory;
  }

  processPayment(type: string, amount: number): void {
    const paymentStrategy = this.paymentFactory.getPaymentStrategy(type);
    paymentStrategy.pay(amount);
  }
}