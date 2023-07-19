import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GenerateRandomNumber, RandomService, RandomToken } from './services/random.service';
import * as comp from './components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    comp.NoServiceFoundComponent,
    comp.Demo1Component,
    comp.Demo2Directive,
    comp.DirSelfDecoratorDemoComponent,
    comp.CompSelfDecoratorDemoComponent,
    comp.HostDemoComponent,
    comp.ElementRefDemoComponent,
    comp.ValueDemoComponent,
    comp.ClassDemoComponent,
    comp.ExistingDemoComponent,
    comp.FactoryDemoComponent,
    comp.TaskListComponent,
    comp.TaskListOrderedComponent,
    comp.ForwardRefDemoComponent,
    comp.ParentContentComponent,
    comp.ChildContentComponent,
    comp.MProviderDemoComponent,
    comp.NgOnDestroyComponent

  ],
  providers: [
    { provide: RandomToken, useFactory: GenerateRandomNumber(), deps: [RandomService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
