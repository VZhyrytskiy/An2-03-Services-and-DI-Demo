import { Component, OnInit, Inject } from '@angular/core';

import { DataTopNFactory, DataTop3, DataService } from '../../services';

@Component({
  selector: 'app-factory-demo',
  templateUrl: './factory-demo.component.html',
  styleUrls: ['./factory-demo.component.css'],
  providers: [
    DataService,
    { provide: DataTop3, useFactory: DataTopNFactory(3), deps: [DataService] }
  ]
})
export class FactoryDemoComponent implements OnInit {
  content: string;
  constructor(@Inject(DataTop3) private dataTop3: any[]) {}

  ngOnInit() {
    this.content = `DataTop3: ${this.dataTop3}`;
  }
}
