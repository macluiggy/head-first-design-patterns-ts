import Observer from "./Observer";
import Task from "./Task";

export default class Logger implements Observer {
  public update(task: Task, action): void {
    console.log(`Logger: Task ${task.name} has been ${action}.`);
  }
}
