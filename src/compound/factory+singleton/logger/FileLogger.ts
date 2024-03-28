import Logger from "./Logger";

export default class FileLogger implements Logger {
  log(message: string): void {
    console.log(`File: ${message}`);
  }
}