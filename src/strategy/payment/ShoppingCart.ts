import BitcoinPaymentStrategy from "./BitcoinPaymentStrategy";
import BitcoinPaymentStrategyAdapter from "./BitcoinPaymentStrategyAdapter";
import CreditCardPaymentStrategy from "./CreditCardPaymentStrategy";
import PaymentStrategy from "./PaymentStrategy";

export default class ShoppingCart {
  static main(): void {
    const shoppingCart = new ShoppingCart();
    shoppingCart.setPaymentStrategy(new CreditCardPaymentStrategy());
    shoppingCart.checkout(100);

    // const bitcoinPaymentStrategy = new BitcoinPaymentStrategy();
    // shoppingCart.setPaymentStrategy(bitcoinPaymentStrategy);
    const bitcoinPaymentStrategy = new BitcoinPaymentStrategyAdapter(new BitcoinPaymentStrategy());
    shoppingCart.setPaymentStrategy(bitcoinPaymentStrategy);
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

/**
 Diseñé e implementé formularios dinámicos para recopilación de datos de clientes (personas naturales/jurídicas) cumpliendo con regulaciones de debida diligencia
Desarrollé microservicio de catálogos utilizando herencia en TypeScript, creando 20+ catálogos reutilizables con métodos estandarizados mediante un servicio base
Implementé patrón Strategy para gestión de caché con Redis, mejorando tiempos de respuesta en 35% y permitiendo intercambio modular de proveidores de caché
Optimicé flujos de autorización mediante estructura jerárquica en árbol con algoritmo Depth-First Search para gestión de 40+ posiciones organizacionales
Diseñé sistema de migración de datos distribuido para integración con Neocore utilizando tablas hash para búsquedas O(1) en inicialización de datos
Apliqué principios SOLID y patrones de diseño (Singleton, Strategy) para mantener bajo acoplamiento y alta cohesión en código
Implementé sistema de tipos de autorización escalable manejando 10+ variantes de flujos de aprobación con diferentes reglas empresariales
Coordiné migraciones de datos complejas entre sistemas distribuidos asegurando consistencia e integridad de la información

 */