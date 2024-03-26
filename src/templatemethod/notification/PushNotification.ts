import Notification from "./Notification";

export default class PushNotification extends Notification {
  msg: string;
  constructor(msg: string) {
    super({});
    this.msg = msg;
  }
  createMessage(): string {
    console.log(`Creating push message: ${this.msg}`);
    return this.msg;
  }
  formatMessage(message: string): string {
    return `Push: ${message}`;
  }
  send(message: string, to?: string | undefined): void {
    console.log(`Sending push: ${message}`);
  }
}
