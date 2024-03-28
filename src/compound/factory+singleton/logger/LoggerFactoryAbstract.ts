import Logger from "./Logger";

export default interface LoggerFactory {
  createLogger(): Logger;
}