import LegacyLoggingSystem from "./LegacyLoggingSystem";
import ModerLoggingSystemInterface from "./ModerLoggingSystemInterface";

export default class LegacyLoggingSystemAdapter implements ModerLoggingSystemInterface {
  constructor(private legacyLoggingSystem: LegacyLoggingSystem) {}

  log(message: string): void {
    this.legacyLoggingSystem.logMessage(message);
  }
}