import TaskManager from "./TaskManager";
import Task from "./Task";
import Logger from "./Logger";
import Notificator from "./Notificator";

const taskManager = new TaskManager();

const task1 = new Task("Task 1", "Description 1");
const task2 = new Task("Task 2", "Description 2");

const logger = new Logger();
const notificator = new Notificator();

taskManager.subscribe(logger);
taskManager.subscribe(notificator);

taskManager.addTask(task1);
taskManager.addTask(task2);