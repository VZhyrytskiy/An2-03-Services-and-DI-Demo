import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { configToken } from '../shared/config.token';
import { Config } from '../shared/config.interface';
import { DepartmentComponent } from './department.component';

export const configValue: Config = {
  apiEndPoint: 'xyz.com',
  timeout: 4000
};

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ],
  providers: [{
    provide: configToken, useValue: configValue
  }]
})
export class DepartmentModule { }
