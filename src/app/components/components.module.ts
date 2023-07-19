import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MProviderDemoComponent,
  NgOnDestroyComponent,
  DemoComponent,
} from '.';


const comp = [
  MProviderDemoComponent,
  NgOnDestroyComponent,
  DemoComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [ ...comp],
  exports: [...comp]
})
export class ComponentsModule { }
