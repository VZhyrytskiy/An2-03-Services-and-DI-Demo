import { Component, inject, type OnInit } from '@angular/core';

import { DataService, TaskService } from 'src/app/services';
import { ChildViewComponent } from './child-view/child-view.component';

@Component({
  selector: 'app-parent-content',
  standalone: true,
  templateUrl: './parent-content.component.html',
  styleUrls: ['./parent-content.component.css'],
  providers: [DataService],
  viewProviders: [TaskService],  // No access from content
  imports: [ChildViewComponent]
})
export class ParentContentComponent implements OnInit {
  content!: string;

  private dataService = inject(DataService);
  private taskService = inject(TaskService);

  ngOnInit(): void {
    const r1 = this.dataService.getData();
    const r2 = this.taskService.getTasks()[0].action;

    this.content = `(${r1}, ${r2})`;
  }
}
