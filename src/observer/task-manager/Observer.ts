import Task from "./Task";

export default interface Observer {
  update(task: Task, action: string): void;
}