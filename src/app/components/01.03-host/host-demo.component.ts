import { Component } from '@angular/core';
import { DataService } from '../../services';

@Component({
  selector: 'app-host-demo',
  template: `
    <p appSomeDir>
      host-demo works!
    </p>
  `,
  providers: [DataService]
})
export class HostDemoComponent {}
