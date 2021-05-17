import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  logNumber(n: number): void {
    console.log(n);
  }

  logString(s: string): void {
    console.log(s);
  }

  log(d: any): void {
    console.log(d);
  }

}
