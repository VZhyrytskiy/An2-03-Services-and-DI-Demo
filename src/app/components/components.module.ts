import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ElementRefDemoComponent,
  FactoryDemoComponent,
  ExistingDemoComponent,
  ValueDemoComponent,
  ClassDemoComponent,
  TaskListComponent,
  TaskListOrderedComponent,
  ForwardRefDemoComponent,
  MProviderDemoComponent,
  HostDemoComponent,
  SomeDirDirective,
  NgOnDestroyComponent,
  DemoComponent,
  ChildContentComponent,
  ChildViewComponent,
  ParentContentComponent,
  HighlightDirective
} from '.';


const dirs = [HighlightDirective];
const comp = [
  ElementRefDemoComponent,
  FactoryDemoComponent,
  ExistingDemoComponent,
  ValueDemoComponent,
  ClassDemoComponent,
  TaskListComponent,
  TaskListOrderedComponent,
  ForwardRefDemoComponent,
  MProviderDemoComponent,
  NgOnDestroyComponent,
  DemoComponent,
  ChildContentComponent,
  ChildViewComponent,
  ParentContentComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: [ ...comp, ...dirs ],
  exports: [...comp]
})
export class ComponentsModule { }
