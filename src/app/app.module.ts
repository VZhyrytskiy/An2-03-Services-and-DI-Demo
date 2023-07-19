import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { GenerateRandomNumber, RandomService, RandomToken } from './services/random.service';
import { DirSelfDecoratorDemoComponent, CompSelfDecoratorDemoComponent, NoServiceFoundComponent, Demo1Component, Demo2Directive, HostDemoComponent, ElementRefDemoComponent  } from './components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    NoServiceFoundComponent,
    Demo1Component,
    Demo2Directive,
    DirSelfDecoratorDemoComponent,
    CompSelfDecoratorDemoComponent,
    HostDemoComponent,
    ElementRefDemoComponent
  ],
  providers: [
    { provide: RandomToken, useFactory: GenerateRandomNumber(), deps: [RandomService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
