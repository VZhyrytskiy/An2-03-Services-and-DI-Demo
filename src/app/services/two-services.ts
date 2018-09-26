import { Injectable, Inject, forwardRef } from '@angular/core';

@Injectable()
export class DoorService {
  // DoorService attempts to inject LockService,
  // despite it not being defined yet.
  // forwardRef makes this possible.
  constructor(
    @Inject(forwardRef(() => LockService)) public lock: LockService
  ) // public lock: LockService)
  {}
}

// Only at this point LockService is defined.
@Injectable()
export class LockService {
  type = 'deadlock';
}
