import { Component, OnInit } from '@angular/core';

import { LoggerService, MyLoggerService, DataService } from '../../services';

@Component({
  selector: 'app-existing-demo',
  templateUrl: './existing-demo.component.html',
  styleUrls: ['./existing-demo.component.css'],
  providers: [
    LoggerService,
    { provide: DataService, useClass: LoggerService }, // copy of LoggerService
    { provide: MyLoggerService, useExisting: LoggerService } // the same as LoggerService
  ]
})
export class ExistingDemoComponent implements OnInit {
  constructor(
    private loggerService: LoggerService,
    private logService: DataService,
    private myLoggerService: MyLoggerService
  ) {}

  ngOnInit() {
    console.log('useExisting:');
    console.log(Object.is(this.loggerService, this.myLoggerService));
    console.log(Object.is(this.logService, this.myLoggerService));
    this.myLoggerService.log(123);
  }
}
