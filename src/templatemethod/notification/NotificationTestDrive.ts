import EmailNotification from "./EmailNotification";
import PushNotification from "./PushNotification";
import SMSNotification from "./SMSNotification";

export default class NotificationTestDrive {
  static main(): void {
    const emailNotification = new EmailNotification(
      "example@example.com",
      "Hello, World!"
    );
    emailNotification.sendNotification();

    const pushNotification= new PushNotification("Hello, World!");
    pushNotification.sendNotification();

    const smsNotification = new SMSNotification("1234567890", "Hello, World!");
    smsNotification.sendNotification();
  }
}

NotificationTestDrive.main();
