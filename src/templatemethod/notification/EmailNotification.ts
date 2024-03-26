import Notification from "./Notification";

export default class EmailNotification extends Notification {
  emailTo: string;
  msg: string;
  constructor(emailTo: string, msg: string) {
    super({});
    this.emailTo = emailTo;
    this.msg = msg;
  }

  createMessage(): string {
    console.log(`Creating email message: ${this.msg}`);
    return this.msg;
  }

  formatMessage(message: string): string {
    return `Email: ${message}`;
  }

  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}
