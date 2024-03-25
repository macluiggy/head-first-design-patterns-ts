export default class Logger {
  private static uniqueInstance: Logger;
  currentDateTime: string;
  private constructor() {
    // throw new Error("Use Logger.getInstance() to create a new instance");
    this.currentDateTime = new Date().toISOString();
  }

  public static getInstance(): Logger {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Logger();
    }
    return this.uniqueInstance;
  }

  public log(message: string): void {
    console.log(`

    ${new Date().toISOString()} - ${message}

    `);

    // console.log(`

    // ${this.currentDateTime} - ${message}

    // `);
  }
}
