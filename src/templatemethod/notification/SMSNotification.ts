import Notification from "./Notification";

export default class SMSNotification extends Notification {
  phoneNumber: string;
  msg: string;
  constructor(phoneNumber: string, msg: string) {
    super({});
    this.phoneNumber = phoneNumber;
    this.msg = msg;
  }

  createMessage(): string {
    console.log(`Creating SMS message: ${this.msg}`);
    return this.msg;
  }

  formatMessage(message: string): string {
    return `SMS: ${message}`;
  }

  send(message: string, to?: string | undefined): void {
    console.log(`Sending SMS: ${message} to number ${this.phoneNumber}`);
  }
}