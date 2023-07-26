import Observer from "./Observer";
import Task from "./Task";

export default class Notificator implements Observer {
  public update(task: Task, action): void {
    console.log(`Notificator: Task ${task.name} has been ${action}.`);
  }
}
