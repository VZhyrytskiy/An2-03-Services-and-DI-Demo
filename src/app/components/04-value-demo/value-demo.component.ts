import { Component, OnInit, Inject, InjectionToken } from '@angular/core';

import { ArrayDataService, adsInstance } from '../../services';

const TITLE = new InjectionToken<string>('title');

@Component({
  selector: 'app-value-demo',
  templateUrl: './value-demo.component.html',
  styleUrls: ['./value-demo.component.css'],
  providers: [
    { provide: TITLE, useValue: 'Application' },
    { provide: ArrayDataService, useValue: adsInstance }
  ]
})
export class ValueDemoComponent implements OnInit {
  content: string;

  constructor(
    @Inject(TITLE) public ttl: string,
    private adsIn: ArrayDataService
  ) {}

  ngOnInit() {
    this.content = this.adsIn.getAllData().toString();
  }
}
