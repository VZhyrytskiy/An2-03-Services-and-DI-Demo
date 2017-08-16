import { Component, OnInit, OpaqueToken, Inject, InjectionToken } from '@angular/core';

import { DataService } from './../../services';

// Deprecation Notes about OpaqueToken
// since v4.0.0 because it does not support type information,
// use InjectionToken<?> instead.
// const TITLE = new OpaqueToken('title');

const TITLE = new InjectionToken<string>('title');
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
    @Inject(TITLE) public ttl: string,
    private dsIn: DataService,
  ) { }

  ngOnInit() {
    this.content = this.dsIn.getAllData().toString();
  }

}
