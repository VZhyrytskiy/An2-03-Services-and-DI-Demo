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
  NgOnDestroyComponent,
  DemoComponent,
  ChildContentComponent,
  ChildViewComponent,
  ParentContentComponent,
  HighlightDirective
} from '.';


const comp = [
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
  declarations: [ ...comp],
  exports: [...comp]
})
export class ComponentsModule { }
