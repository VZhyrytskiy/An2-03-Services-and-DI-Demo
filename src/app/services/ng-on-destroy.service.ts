import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class NgOnDestroyService implements OnDestroy {
  getData(): string {
    return 'data';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    console.log('Demo Service is destroyed');
  }
}
