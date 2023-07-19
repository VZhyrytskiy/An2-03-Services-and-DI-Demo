import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FactoryDemoComponent,
  ExistingDemoComponent,
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
} from '.';


const comp = [
  FactoryDemoComponent,
  ExistingDemoComponent,
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
