import { Component, OnInit, Inject } from '@angular/core';

import { DataTopNFactory, Data_Top3 } from './../../services/use-factory';
import { DataService } from './../../services/common';

@Component({
  selector: 'app-factory-demo',
  templateUrl: './factory-demo.component.html',
  styleUrls: ['./factory-demo.component.css'],
  providers: [
    DataService,
    { provide: Data_Top3, useFactory:  DataTopNFactory(3), deps: [ DataService ] }
  ]
})
export class FactoryDemoComponent implements OnInit {
  content: string;
  constructor(
    @Inject(Data_Top3) private dataTop3: any[]
  ) { }

  ngOnInit() {
    this.content = `DataTop3: ${this.dataTop3}`;
  }

}
