import { Component, OnInit } from '@angular/core';

import { TaskService, TaskModel } from '../../../services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {
  tasks: Array<TaskModel>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.afterGetTasks();
  }

  // Post-process tasks in derived class override.
  protected afterGetTasks() {}
}
