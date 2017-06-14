import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { HighlightDirective } from './directives/highlight.directive';

import { DoorService, LockService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [
    DoorService,
    LockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
