import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgOnDestroyComponent,
  DemoComponent,
} from '.';


const comp = [
  NgOnDestroyComponent,
  DemoComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [ ...comp],
  exports: [...comp]
})
export class ComponentsModule { }
