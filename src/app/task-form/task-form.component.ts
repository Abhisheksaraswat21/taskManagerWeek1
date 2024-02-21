import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"],
})
export class TaskFormComponent implements OnInit {
  task: any = {};

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get("id");
    if (taskId) {
      const taskIdNumber = +taskId;
      this.task = this.taskService.getTaskById(taskIdNumber);
    }
  }

  saveTask() {
    if (this.task.id) {
      this.taskService.updateTask(this.task);
    } else {
      this.taskService.addTask(this.task);
    }
    // Redirect back to the tasks page
    this.router.navigate(["/tasks"]);
    alert("Task Added Successfully!");
  }
}
