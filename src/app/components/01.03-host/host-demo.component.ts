import { Component } from '@angular/core';
import { DataService } from '../../services';
import { SomeDirDirective } from './some-dir.directive';

@Component({
  selector: 'app-host-demo',
  standalone: true,
  template: `
    <p appSomeDir>
      host-demo works!
    </p>
  `,
  imports: [SomeDirDirective],
  providers: [DataService]
})
export class HostDemoComponent {}
