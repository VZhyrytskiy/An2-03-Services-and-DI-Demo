import { Component } from '@angular/core';

import { TaskListComponent } from '../task-list/task-list.component';
import { TaskService, TaskModel } from '../../../services';

@Component({
  selector: 'app-task-list-ordered',
  templateUrl: './task-list-ordered.component.html',
  styleUrls: ['./task-list-ordered.component.css'],
  providers: [TaskService]
})
export class TaskListOrderedComponent extends TaskListComponent {
  constructor(taskService: TaskService) {
    super(taskService);
  }

  afterGetTasks() {
    this.tasks = this.tasks.sort((t1: TaskModel, t2: TaskModel) => {
      return t1.action < t2.action ? -1 : t1.action > t2.action ? 1 : 0;
    });
  }
}
