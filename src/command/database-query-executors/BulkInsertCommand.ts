import Command from "./Command";
import Database from "./Database";

export default class BulkInsertCommand extends Command {
  private backupData = [{}];
  private data: {}[];
  private database: Database;

  constructor(data: {}[], database: Database) {
    super();
    this.data = data;
    this.database = database;
  }

  public execute(): void {
    this.backupData = this.data;
    this.database.bulkInsert(this.data);
  }

  public undo(): void {
    this.data = this.backupData;
    this.database.delete(this.data);
  }

  public redo(): void {
    this.execute();
  }
}
