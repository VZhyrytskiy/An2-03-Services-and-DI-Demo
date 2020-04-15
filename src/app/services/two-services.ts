/**
 * Important Notice
 * This example is broken in Angular v8 with target option es2015 in tsconfig.json
 * If you specify target: "es5", it will work.
 */
import { Injectable, Inject, forwardRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoorService {
  lock: LockService;
  // DoorService attempts to inject LockService,
  // despite it not being defined yet.
  // forwardRef makes this possible.
  constructor(
    // tslint:disable-next-line: no-use-before-declare
    @Inject(forwardRef(() => LockService)) lock: LockService
  ) {
    this.lock = lock;
  }
}

// Only at this point LockService is defined.
@Injectable({
  providedIn: 'root'
})
export class LockService {
  type = 'deadlock';
}
