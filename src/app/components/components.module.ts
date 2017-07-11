import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ElementRefDemoComponent, FactoryDemoComponent, ExistingDemoComponent,
  ValueDemoComponent, ClassDemoComponent, NoServiceFoundComponent,
TaskListComponent, TaskListOrderedComponent, ForwardRefDemoComponent
} from '.';

import { HighlightDirective } from './../directives/highlight.directive';

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
    ForwardRefDemoComponent,
    HighlightDirective
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
