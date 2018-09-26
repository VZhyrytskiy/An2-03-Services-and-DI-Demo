import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class NgOnDestroyService implements OnDestroy {
  getData() {
    return 'data';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    console.log('Demo Service is destroyed');
  }
}
