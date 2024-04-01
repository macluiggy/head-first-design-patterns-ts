import PaymentFactory from "./PaymentFactory";
import PaymentProcessor from "./PaymentProcessor";

const paymentProcessor = new PaymentProcessor(new PaymentFactory());
paymentProcessor.processPayment('credit-card', 100);
paymentProcessor.processPayment('paypal', 200);
