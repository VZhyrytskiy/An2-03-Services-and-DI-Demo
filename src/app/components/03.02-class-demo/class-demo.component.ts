import { Component, inject, type OnInit } from '@angular/core';

import { DataService, ChildDataService } from '../../services';

@Component({
  selector: 'app-class-demo',
  standalone: true,
  templateUrl: './class-demo.component.html',
  styleUrls: ['./class-demo.component.css'],
  providers: [{ provide: DataService, useClass: ChildDataService }]
})
export class ClassDemoComponent implements OnInit {
  content!: string;

  private dataService = inject(DataService);

  ngOnInit(): void {
    this.content = this.dataService.getData();
  }
}
