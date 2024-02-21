import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { TaskListComponent } from "./task-list/task-list.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "", component: TaskListComponent },
  { path: "tasks", component: TaskListComponent },

  { path: "task/:id", component: TaskDetailsComponent },
  { path: "add-task", component: TaskFormComponent },
  { path: "edit-task/:id", component: TaskFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailsComponent,
    TaskFormComponent,
    TaskListComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
