import { Component, OnInit } from '@angular/core';

import { LoggerService, MyLoggerService } from './../../services';

@Component({
  selector: 'app-existing-demo',
  templateUrl: './existing-demo.component.html',
  styleUrls: ['./existing-demo.component.css'],
  providers: [
    { provide: LoggerService, useClass: LoggerService },
    { provide: MyLoggerService, useExisting: LoggerService }
  ]
})
export class ExistingDemoComponent implements OnInit {

 constructor(
    private myLoggerService: MyLoggerService,
  ) {}

  ngOnInit() {
    console.log('useExisting:');
    this.myLoggerService.log(123);
  }

}
