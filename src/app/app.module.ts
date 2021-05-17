import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { ProvidedInModule } from './components';
import { GenerateRandomNumber, RandomService, RandomToken } from './services/random.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    ProvidedInModule
  ],
  providers: [
    { provide: RandomToken, useFactory: GenerateRandomNumber(), deps: [RandomService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
