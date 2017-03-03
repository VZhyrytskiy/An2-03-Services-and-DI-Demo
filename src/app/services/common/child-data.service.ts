import { Injectable } from '@angular/core';

@Injectable()
export class ChildDataService {

  constructor() { }

  getData() {
    return 'child-data';
  }

}
