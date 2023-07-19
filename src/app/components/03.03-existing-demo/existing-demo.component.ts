import { Component, inject, type OnInit } from '@angular/core';

import { LoggerService, MyLoggerService, DataService } from '../../services';

@Component({
  selector: 'app-existing-demo',
  standalone: true,
  templateUrl: './existing-demo.component.html',
  styleUrls: ['./existing-demo.component.css'],
  providers: [
    LoggerService,
    { provide: DataService, useClass: LoggerService }, // copy of LoggerService
    { provide: MyLoggerService, useExisting: LoggerService } // the same as LoggerService
  ]
})
export class ExistingDemoComponent implements OnInit {
  private loggerService = inject(LoggerService);
  private logService = inject(DataService);
  private myLoggerService = inject(MyLoggerService);

  ngOnInit(): void {
    console.log('useExisting:');
    console.log(Object.is(this.loggerService, this.myLoggerService));
    console.log(Object.is(this.logService, this.myLoggerService));
    this.myLoggerService.log(123);
  }
}
