import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DoorService, LockService } from './services';

@NgModule({
  declarations: [
    AppComponent,
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
