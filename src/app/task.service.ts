import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  tasks = [
    { id: 1, title: "Task 1", description: "Description 1", status: "To Do" },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      status: "In Progress",
    },
    { id: 3, title: "Task 3", description: "Description 3", status: "Done" },
  ];
  constructor() {}

  getTasks() {
    return this.tasks;
  }
  getTaskById(index: number) {
    return this.tasks[index - 1];
  }
  addTask(newTask: any) {
    newTask.id = this.tasks.length + 1;
    this.tasks.push(newTask);
  }

  updateTask(updatedTask: any) {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }
}
