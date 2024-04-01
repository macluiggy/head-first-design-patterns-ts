import CreditCardPaymentStrategy from "./CreditCardPaymentStrategy";
import PayPalPaymentStrategy from "./PayPalPaymentStrategy";
import PaymentStrategy from "./PaymentStrategy";

export default class PaymentFactory {
   getPaymentStrategy(type: string): PaymentStrategy {
    switch (type) {
      case 'credit-card':
        return new CreditCardPaymentStrategy();
      case 'paypal':
        return new PayPalPaymentStrategy();
      default:
        throw new Error('Payment strategy not found');
    }
  }
}