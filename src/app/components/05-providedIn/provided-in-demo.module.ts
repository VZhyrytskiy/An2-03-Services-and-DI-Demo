import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidedInDemoComponent } from './provided-in-demo.component';
import { configToken } from './shared/config.token';
import { ProvidedInRoutingModule } from './provided-in-demo-routing.module';
import { type Config } from './shared/config.interface';

export const configValue: Config = {
  apiEndPoint: 'def.com',
  timeout: 5000
};

@NgModule({
  imports: [
    CommonModule,
    ProvidedInRoutingModule
  ],
  declarations: [
    ProvidedInDemoComponent
  ],
  exports: [
    ProvidedInDemoComponent
  ],
  providers: [{
    provide: configToken, useValue: configValue
  }],
})
export class ProvidedInModule {}
