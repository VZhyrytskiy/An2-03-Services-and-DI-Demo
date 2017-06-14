import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  constructor() { }

  getTasks() {
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
