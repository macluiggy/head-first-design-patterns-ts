import Command from "./Command";
import Database from "./Database";

export default class InsertCommand extends Command {
  private backupData = {};
  private data: Object;
  private database: Database;
  constructor(data: {}, database: Database) {
    super();
    this.data = data;
    this.database = database;
  }

  public execute(): void {
    this.backupData = this.data;
    this.database.insert(this.data);
  }

  public undo(): void {
    this.data = this.backupData;
    this.database.delete(this.data);
  }

  public redo(): void {
    this.execute();
  }
}
