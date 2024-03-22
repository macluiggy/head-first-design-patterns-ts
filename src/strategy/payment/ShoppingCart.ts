import CreditCardPaymentStrategy from "./CreditCardPaymentStrategy";
import PaymentStrategy from "./PaymentStrategy";

export default class ShoppingCart {
  static main(): void {
    const shoppingCart = new ShoppingCart();
    shoppingCart.setPaymentStrategy(new CreditCardPaymentStrategy());
    shoppingCart.checkout(100);
  }
  private paymentStrategy: PaymentStrategy;

  public setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  public checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

ShoppingCart.main();