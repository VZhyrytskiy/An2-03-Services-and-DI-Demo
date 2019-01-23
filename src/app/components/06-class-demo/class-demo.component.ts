import { Component, OnInit } from '@angular/core';

import { DataService, ChildDataService } from '../../services';

@Component({
  selector: 'app-class-demo',
  templateUrl: './class-demo.component.html',
  styleUrls: ['./class-demo.component.css'],
  providers: [{ provide: DataService, useClass: ChildDataService }]
})
export class ClassDemoComponent implements OnInit {
  content: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.content = this.dataService.getData();
  }
}
