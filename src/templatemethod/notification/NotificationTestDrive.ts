import EmailNotification from "./EmailNotification";

export default class NotificationTestDrive {
  static main(): void {
    const emailNotification = new EmailNotification(
      "example@example.com",
      "Hello, World!"
    );
    emailNotification.sendNotification();
  }
}

NotificationTestDrive.main();
