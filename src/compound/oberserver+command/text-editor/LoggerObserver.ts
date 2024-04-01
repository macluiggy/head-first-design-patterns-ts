import Observer from "./Observer";

export default class LoggerObserver implements Observer {
  update(text: string): void {
    console.log(`Logger: ${text}`);
  }
}