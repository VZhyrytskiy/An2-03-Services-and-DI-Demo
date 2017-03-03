import { Component, OnInit, OpaqueToken, Inject } from '@angular/core';

import { DataService } from './../../services/use-value';

const TITLE = new OpaqueToken('title');
const dsInst = new DataService();

@Component({
  selector: 'app-value-demo',
  templateUrl: './value-demo.component.html',
  styleUrls: ['./value-demo.component.css'],
  providers: [
    { provide: TITLE, useValue: 'Application' },
    { provide: DataService, useValue: dsInst },
  ]
})
export class ValueDemoComponent implements OnInit {
  content: string;

  constructor(
    @Inject(TITLE) private ttl: string,
    private dsIn: DataService,
  ) { }

  ngOnInit() {
    this.content = this.dsIn.getAllData().toString();
  }

}
