import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ElementRefDemoComponent,
  FactoryDemoComponent,
  ExistingDemoComponent,
  ValueDemoComponent,
  ClassDemoComponent,
  NoServiceFoundComponent,
  TaskListComponent,
  TaskListOrderedComponent,
  ForwardRefDemoComponent,
  MProviderDemoComponent,
  HostDemoComponent,
  SomeDirDirective,
  NgOnDestroyComponent,
  DemoComponent,
  CompSelfDecoratorDemoComponent,
  DirSelfDecoratorDemoComponent,
  CompComponent,
  SelfDirDirective,
  ChildContentComponent,
  ChildViewComponent,
  ParentContentComponent,
  HighlightDirective
} from '.';


const dirs = [HighlightDirective, SomeDirDirective, SelfDirDirective];
const comp = [
  ElementRefDemoComponent,
  FactoryDemoComponent,
  ExistingDemoComponent,
  ValueDemoComponent,
  ClassDemoComponent,
  NoServiceFoundComponent,
  TaskListComponent,
  TaskListOrderedComponent,
  ForwardRefDemoComponent,
  MProviderDemoComponent,
  HostDemoComponent,
  NgOnDestroyComponent,
  DemoComponent,
  DirSelfDecoratorDemoComponent,
  CompSelfDecoratorDemoComponent,
  CompComponent,
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
