import Database from "./Database";
import InsertCommand from "./InsertCommand";
import Invoker from "./Invoker";

const invoker = new Invoker();
const database = new Database();

const data = { name: "John Doe", age: 30 };
const insertCommand = new InsertCommand(data, database);
invoker.storeAndExecute(insertCommand);
// Outputs: Inserting { name: 'John Doe', age: 30 } into database
invoker.undo();
// Outputs: Deleting { name: 'John Doe', age: 30 } from database