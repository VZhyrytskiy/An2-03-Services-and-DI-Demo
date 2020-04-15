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
  DemoComponent
} from '.';

import { HighlightDirective } from '../directives';
import { ProvidedInModule } from './05-providedIn/provided-in-demo.module';

const dirs = [HighlightDirective, SomeDirDirective];
const comp = [ElementRefDemoComponent,
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
  DemoComponent];

@NgModule({
  imports: [CommonModule, ProvidedInModule],
  declarations: [ ...comp, ...dirs ],
  exports: [...comp]
})
export class ComponentsModule { }
