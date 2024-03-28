import ConsoleLogger from "./ConsoleLogger";
import LoggerFactory from "./LoggerFactory";

const loggerFactory = new LoggerFactory();
const fileLogger = loggerFactory.createLogger("file");
const consoleLogger = loggerFactory.createLogger("console");
const consoleLogger2 = loggerFactory.createLogger("console");
const fileLogger2 = loggerFactory.createLogger("file");
console.log(fileLogger == fileLogger2); // true
console.log(consoleLogger === consoleLogger2); // true
