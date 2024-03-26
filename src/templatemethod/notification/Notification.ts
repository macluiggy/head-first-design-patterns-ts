export default abstract class Notification {
  constructor(private parameters: any) {}

  // template method
  sendNotification() {
    const message = this.createMessage();
    const formattedMessage = this.formatMessage(message);
    this.send(formattedMessage);
  }

  // abstract methods
  abstract createMessage(): string;
  abstract formatMessage(message: string): string;
  abstract send(message: string, to?: string): void;
}
