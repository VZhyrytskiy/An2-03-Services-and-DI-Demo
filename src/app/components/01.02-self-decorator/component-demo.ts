import { Component, type OnInit, Optional, Self } from '@angular/core';

import { ChildDataService } from '../../services';

@Component({
  selector: 'app-comp-self-decorator-demo',
  standalone: true,
  template: `
    {{content}}
  `,
  providers: [ChildDataService]
})
export class CompSelfDecoratorDemoComponent implements OnInit {
  content!: string;

  constructor(
    // inject only the service which is specified in the same component,
    // in the components’ providers array
    @Self() @Optional() private childDataService: ChildDataService
  ) {}

  ngOnInit(): void {
    this.content = this.childDataService ? this.childDataService.getData() : 'ChildDataService is not found.';
  }
}
