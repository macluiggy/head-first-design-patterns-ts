import LegacyLoggingSystem from "./LegacyLoggingSystem";
import LegacyLoggingSystemAdapter from "./LegacyLoggingSystemAdapter";

export default class LoggingTestDrive {
  public static main(): void {
    const legacyLoggingSystem = new LegacyLoggingSystem();
    const legacyLoggingSystemAdapter = new LegacyLoggingSystemAdapter(
      legacyLoggingSystem
    );
    legacyLoggingSystemAdapter.log("Hello, World!");
  }
}

LoggingTestDrive.main();
