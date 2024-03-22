import BitcoinPaymentStrategy from "./BitcoinPaymentStrategy";
import PaymentStrategy from "./PaymentStrategy";

export default class BitcoinPaymentStrategyAdapter implements PaymentStrategy {
  constructor(private bitcoinPaymentStrategy: BitcoinPaymentStrategy) {
    this.bitcoinPaymentStrategy = bitcoinPaymentStrategy;
  }

  pay(amount: number): void {
    this.bitcoinPaymentStrategy.processBitcoinPayment(amount);
  }
}
