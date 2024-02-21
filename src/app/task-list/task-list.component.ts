import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  // tasks = [
  //   { title: 'Task 1', description: 'Description 1', status: 'To Do' },
  //   { title: 'Task 2', description: 'Description 2', status: 'In Progress' },
  //   { title: 'Task 3', description: 'Description 3', status: 'Done' },
  // ];

  tasks: any = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
