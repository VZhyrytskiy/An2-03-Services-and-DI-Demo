import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ElementRefDemoComponent, FactoryDemoComponent, ExistingDemoComponent,
  ValueDemoComponent, ClassDemoComponent, NoServiceFoundComponent,
TaskListComponent, TaskListOrderedComponent, ForwardRefDemoComponent
} from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ElementRefDemoComponent,
    FactoryDemoComponent,
    ExistingDemoComponent,
    ValueDemoComponent,
    ClassDemoComponent,
    NoServiceFoundComponent,
    TaskListComponent,
    TaskListOrderedComponent,
    ForwardRefDemoComponent
  ],
  exports: [
    NoServiceFoundComponent,
    ElementRefDemoComponent,
    ValueDemoComponent,
    ClassDemoComponent,
    ExistingDemoComponent,
    FactoryDemoComponent,
    TaskListComponent,
    TaskListOrderedComponent,
    ForwardRefDemoComponent
  ]
})
export class ComponentsModule { }
