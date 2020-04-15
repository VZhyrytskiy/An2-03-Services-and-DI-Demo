import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidedInDemoComponent } from './provided-in-demo.component';
import { Config } from './shared/config.interface';
import { configToken } from './shared/config.token';
import { ProvidedInRoutingModule } from './provided-in-demo-routing.module';

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
