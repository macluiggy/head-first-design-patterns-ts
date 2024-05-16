class EmailSender {
  sender_email: string;
  sender_password: string;
  constructor(sender_email: string, sender_password: string) {
    this.sender_email = sender_email;
    this.sender_password = sender_password;
  }

  sendEmail(email: string, subject: string, message: string) {
    console.log("Email sent");
  }
}

class EmailSaveToDatabase {
  saveEmail(email: string, subject: string, message: string) {
    console.log("Email saved to database");
  }
}

class EmailLogger {
  logEmail(email: string, subject: string, message: string) {
    console.log("Email logged");
  }
}

class Email {
  sender: EmailSender;
  saver: EmailSaveToDatabase;
  logger: EmailLogger;
  constructor(sender: EmailSender, saver: EmailSaveToDatabase, logger: EmailLogger) {
    this.sender = sender;
    this.saver = saver;
    this.logger = logger;
  }

  sendEmail(email: string, subject: string, message: string) {
    this.sender.sendEmail(email, subject, message);
    this.saver.saveEmail(email, subject, message);
    this.logger.logEmail(email, subject, message);
  }
}

const data = {
  email: "fdkfdkfdj",
  subject: "fjdkfjdkf",
  message: "fjdkfjdkf",
  password: "fjdkfjdkf",
};

const emailSender = new EmailSender(data.email, data.password);
const emailSaver = new EmailSaveToDatabase();
const emailLogger = new EmailLogger();

emailSender.sendEmail(data.email, data.subject, data.message);
emailSaver.saveEmail(data.email, data.subject, data.message);
emailLogger.logEmail(data.email, data.subject, data.message);
