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
