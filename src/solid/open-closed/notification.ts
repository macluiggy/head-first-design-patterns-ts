/**
 * Open-Closed Principle
 * This principle states that a class should be open for extension but closed for modification.
 * This means that a class should be easily extensible without modifying the class itself.
 * For example, if you have a class that sends notifications, you should be able to add new notification types without modifying the class.
 */

interface Notifier {
  notify(): void;
}

class EmailNotifier implements Notifier {
  notify(): void {
    console.log("Email notification sent");
  }
}

class SMSNotifier implements Notifier {
  notify(): void {
    console.log("SMS notification sent");
  }
}
