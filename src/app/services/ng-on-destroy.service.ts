import { Injectable } from '@angular/core';

@Injectable()
export class NgOnDestroyService {
  getData() {
    return 'data';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    console.log('Demo Service is destroyed');
  }
}
