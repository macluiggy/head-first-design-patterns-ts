export default class Database {
  public insert(data: {}): void {
    console.log(`Inserting ${JSON.stringify(data)} into database`);
  }
  public update(data: {}): void {
    console.log(`Updating ${JSON.stringify(data)} in database`);
  }
  public delete(data: {}): void {
    console.log(`Deleting ${JSON.stringify(data)} from database`);
  }
}