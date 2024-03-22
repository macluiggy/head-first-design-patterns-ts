// here the method name is processBitcoinPayment, so for being able to use it with the same method name without modifying this class, we need to create an adapter class that will have the same method name.
export default class BitcoinPaymentStrategy {
  public processBitcoinPayment(amount: number): void {
    console.log(`Paying ${amount} using Bitcoin.`);
  }
}