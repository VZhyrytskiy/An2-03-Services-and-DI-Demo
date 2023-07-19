import { Injectable, type OnDestroy } from '@angular/core';

@Injectable()
export class NgOnDestroyService implements OnDestroy {
  constructor() {
    console.log('Demo Service is created');
  }

  ngOnDestroy(): void {
    console.log('Demo Service is destroyed');
  }

  getData(): string {
    return 'data';
  }
}
