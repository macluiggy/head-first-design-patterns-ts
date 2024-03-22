import MessageService from "./MessageService";
import User from "./User";

export default class MessageTestDrive {
  public static main(): void {
    const messageService = new MessageService();
    const user1 = new User("User 1");
    const user2 = new User("User 2");
    const user3 = new User("User 3");

    messageService.registerObserver(user1);
    messageService.registerObserver(user2);
    messageService.sendMessage("Hello, World!", "Admin");
    messageService.registerObserver(user3);
    messageService.sendMessage("Hello, World!", "Admin");
  }
}

MessageTestDrive.main();
