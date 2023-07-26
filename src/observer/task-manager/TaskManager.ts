import Observer from "./Observer";
import Task from "./Task";

export default class TaskManager {
  private observers: Observer[] = [];
  private tasks: Task[] = [];

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(
      (existingObserver) => existingObserver !== observer
    );
  }

  public addTask(task: Task): void {
    this.tasks.push(task);
    this.notify(task, "add");
  }

  public notify(task: Task, action: string): void {
    this.observers.forEach((observer) => observer.update(task, action));
  }
}
