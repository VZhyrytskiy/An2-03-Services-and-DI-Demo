import { InjectionToken } from '@angular/core';
import { type Config } from './config.interface';

export const configToken = new InjectionToken<Config>('demo token');
