import AbstractLoggerFactory from "./LoggerFactoryAbstract";
import FileLogger from "./FileLogger";
import ConsoleLogger from "./ConsoleLogger";
import Logger from "./Logger";

export default class LoggerFactory implements AbstractLoggerFactory {
  private static instance: LoggerFactory;
  private instances: Map<string, FileLogger | ConsoleLogger> = new Map<
    string,
    FileLogger | ConsoleLogger
  >();

  createLogger(type: "file" | "console"): Logger {
    if (type === "file") {
      // return new FileLogger()
      if (!this.instances.has("file")) {
        this.instances.set("file", new FileLogger());
      }
      return this.instances.get("file") as FileLogger;
    } else {
      // return new ConsoleLogger()
      if (!this.instances.has("console")) {
        this.instances.set("console", new ConsoleLogger());
      }
      return this.instances.get("console") as ConsoleLogger;
    }
  }
}
