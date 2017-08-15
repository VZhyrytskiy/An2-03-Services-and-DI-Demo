import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ElementRefDemoComponent, FactoryDemoComponent, ExistingDemoComponent,
  ValueDemoComponent, ClassDemoComponent, NoServiceFoundComponent,
TaskListComponent, TaskListOrderedComponent, ForwardRefDemoComponent, MultiproviderDemoComponent
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
    HighlightDirective,
    MultiproviderDemoComponent
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
    ForwardRefDemoComponent,
    MultiproviderDemoComponent
  ]
})
export class ComponentsModule { }
