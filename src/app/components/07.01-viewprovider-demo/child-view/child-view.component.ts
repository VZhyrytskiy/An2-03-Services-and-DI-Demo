import { Component, Optional, type OnInit, inject } from '@angular/core';
import { DataService, TaskService } from 'src/app/services';

@Component({
  selector: 'app-child-view',
  standalone: true,
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit{
  content!: string;

  private dataService = inject(DataService, { optional: true });
  private taskService = inject(TaskService, { optional: true });

  ngOnInit(): void {
    const r1 = this.dataService ? this.dataService.getData() : 'No DataService';
    const r2 = this.taskService ? this.taskService.getTasks()[0].action: 'No TaskService';

    this.content = `(${r1}, ${r2})`;
  }
}
