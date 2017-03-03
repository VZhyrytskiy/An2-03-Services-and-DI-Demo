import { Component, OnInit } from '@angular/core';

import { ChildDataService } from './services/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
   ChildDataService
  ]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor() {}

  ngOnInit() {
  }
}
