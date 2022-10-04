import { ILogger } from "./factory-class";

const productionLogger = (): ILogger => ({
  info(message: string) {},
  warn(message: string) {
    console.warn(`[WARN] ${message}`);
  },
  debug(message: string) {},
  error(message: string) {
    console.error(`[ERROR] ${message}`);
  },
});

const developmentLogger = (): ILogger => ({
  info(message: string) {
    console.info(`[INFO] ${message}`);
  },
  warn(message: string) {
    console.warn(`[WARN] ${message}`);
  },
  debug(message: string) {
    console.debug(`[DEBUG] ${message}`);
  },
  error(message: string) {
    console.error(`[ERROR] ${message}`);
  },
});

export const createLogger = (): ILogger => {
  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV === "production") {
    return productionLogger();
  } else {
    return developmentLogger();
  }
};
