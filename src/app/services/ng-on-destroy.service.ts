import { Injectable, type OnDestroy } from '@angular/core';

@Injectable()
export class NgOnDestroyService implements OnDestroy {
  getData(): string {
    return 'data';
  }

  ngOnDestroy(): void {
    console.log('Demo Service is destroyed');
  }
}
