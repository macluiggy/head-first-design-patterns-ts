import Logger from "./Logger";

export default interface AbstractLoggerFactory {
  createLogger(type: "file" | "console"): Logger;
}
