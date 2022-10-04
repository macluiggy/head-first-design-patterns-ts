export interface ILogger {
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}

class ProductionLogger implements ILogger {
  info(message: string) {
  }
  warn(message: string) {
    console.warn(`[WARN] ${message}`);
  }
  debug(message: string) {
  }
  error(message: string) {
    console.error(`[ERROR] ${message}`);
  }
}

class DevelopmentLogger implements ILogger {
  info(message: string) {
    console.info(`[INFO] ${message}`);
  }
  warn(message: string) {
    console.warn(`[WARN] ${message}`);
  }
  debug(message: string) {
    console.debug(`[DEBUG] ${message}`);
  }
  error(message: string) {
    console.error(`[ERROR] ${message}`);
  }
}

export class LoggerFactory {
  public static createLogger(): ILogger {
    console.log(process.env.NODE_ENV);
    
    if (process.env.NODE_ENV === 'production') {
      return new ProductionLogger();
    } else {
      return new DevelopmentLogger();
    }
  }
}

