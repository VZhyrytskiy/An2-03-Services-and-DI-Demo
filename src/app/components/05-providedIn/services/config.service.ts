import { Injectable, Inject } from '@angular/core';
import { configToken } from './../shared/config.token';
import { Config } from '../shared/config.interface';

@Injectable({
  // one service instance for all modules
  providedIn: 'root'
  // each lazy module gets its own instance of service
  // providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(configToken) private config: Config) {
    console.log('new instance is created');
  }

  getValue() {
    return this.config;
  }
}
