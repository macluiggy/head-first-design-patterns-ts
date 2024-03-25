import Logger from "./Logger";

export default class LoggingTestDrive {
  public static main(): void {
    const logger = Logger.getInstance();
    // const logger = new Logger();
    logger.log("Hello World");
    setTimeout(() => {
      logger.log("Hello World");
    }, 1000);
    const logger2 = Logger.getInstance();
    logger2.log("Hello World");
  }
}

LoggingTestDrive.main();
