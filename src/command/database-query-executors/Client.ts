import Database from "./Database";
import InsertCommand from "./InsertCommand";
import Invoker from "./Invoker";
import BulkInsertCommand from "./BulkInsertCommand";
import SelectCommand from "./SelectCommand";

const invoker = new Invoker();
const database = new Database();

const data = { name: "John Doe", age: 30 };
const insertCommand = new InsertCommand(data, database);
invoker.storeAndExecute(insertCommand);
// Outputs: Inserting { name: 'John Doe', age: 30 } into database
invoker.undo();
// Outputs: Deleting { name: 'John Doe', age: 30 } from database

const bulkData = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 40 },
];
const bulkInsertCommand = new BulkInsertCommand(bulkData, database);
invoker.storeAndExecute(bulkInsertCommand);
// Outputs: Bulk inserting [{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 40 }] into database
invoker.undo();
// Outputs: Deleting [{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 40 }] from database

const selectCommand = new SelectCommand(data, database);
invoker.storeAndExecute(selectCommand);
// Outputs: Selecting { name: 'John Doe', age: 30 } from database
invoker.undo();
// Outputs: Deleting { name: 'John Doe', age: 30 } from database
