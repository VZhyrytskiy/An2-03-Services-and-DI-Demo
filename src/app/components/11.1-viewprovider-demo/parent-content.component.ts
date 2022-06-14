import { Component, type OnInit } from '@angular/core';

import { DataService, TaskService } from 'src/app/services';

@Component({
  selector: 'app-parent-content',
  templateUrl: './parent-content.component.html',
  styleUrls: ['./parent-content.component.css'],
  providers: [DataService],
  viewProviders: [TaskService]  // No access from content
})
export class ParentContentComponent implements OnInit {
  content!: string;

  constructor(
    private dataService: DataService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const r1 = this.dataService.getData();
    const r2 = this.taskService.getTasks()[0].action;

    this.content = `(${r1}, ${r2})`;
  }
}
