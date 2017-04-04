import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HighlightDirective } from './directives/highlight.directive';

import { ElementRefDemoComponent } from './components/element-ref-demo/element-ref-demo.component';
import { FactoryDemoComponent } from './components/factory-demo/factory-demo.component';
import { ExistingDemoComponent } from './components/existing-demo/existing-demo.component';
import { ValueDemoComponent } from './components/value-demo/value-demo.component';
import { ClassDemoComponent } from './components/class-demo/class-demo.component';
import { NoServiceFoundComponent } from './components/no-service-found/no-service-found.component';
import { TaskListComponent } from './components/derived-class/task-list/task-list.component';
import { TaskListOrderedComponent } from './components/derived-class/task-list-ordered/task-list-ordered.component';
import { ForwardRefDemoComponent } from './components/forward-ref-demo/forward-ref-demo.component';

import { ChildDataService } from './services/use-class';
import { DoorService, LockService } from './services/forward-ref/two-services';

@NgModule({
  declarations: [
    AppComponent,
    ElementRefDemoComponent,
    HighlightDirective,
    FactoryDemoComponent,
    ExistingDemoComponent,
    ValueDemoComponent,
    ClassDemoComponent,
    NoServiceFoundComponent,
    TaskListComponent,
    TaskListOrderedComponent,
    ForwardRefDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ChildDataService,
    DoorService,
    LockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
