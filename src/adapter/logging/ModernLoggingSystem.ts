import ModerLoggingSystemInterface from "./ModerLoggingSystemInterface";

export default class ModernLoggingSystem
  implements ModerLoggingSystemInterface
{
  log(message: string): void {
    console.log(message);
  }
}
