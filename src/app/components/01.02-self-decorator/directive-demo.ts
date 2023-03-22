import { Component, Directive, type OnInit, Optional, Self } from '@angular/core';
import { ChildDataService } from '../../services';

@Component({
  selector: 'app-comp',
  standalone: true,
  template: `Hi!`,
  // providers: [ChildDataService]
})
export class CompComponent {}

@Directive({
  selector: '[appSelfDir]',
  standalone: true,
  // providers: [ChildDataService]
})
export class SelfDirDirective implements OnInit {
  constructor(
    // inject a service which is specified on the element on which the Directive is applied
    // or in the providers array of current directive
    @Self() @Optional() private childDataService: ChildDataService
  ) {}

  ngOnInit(): void {
    console.log(this.childDataService ? this.childDataService.getData() : 'ChildDataService is not found ');
  }
}

@Component({
  selector: 'app-dir-self-decorator-demo',
  standalone: true,
  imports: [CompComponent, SelfDirDirective],
  template: `
    <app-comp appSelfDir></app-comp>
    <p appSelfDir>p-demo works!</p>
  `,
  // providers: [ChildDataService]
})
export class DirSelfDecoratorDemoComponent {}







