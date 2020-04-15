import { Injectable } from '@angular/core';

export interface TaskModel {
  action: string;
  done: boolean;
}

@Injectable()
export class TaskService {

  getTasks(): TaskModel[] {
    return [
      { action: 'Estimate', done: false },
      { action: 'Create', done: false },
      { action: 'Implement', done: false },
      { action: 'Deploy', done: false },
      { action: 'Delete', done: false },
      { action: 'Modify', done: false },
      { action: 'Edit', done: false }
    ];
  }

}
