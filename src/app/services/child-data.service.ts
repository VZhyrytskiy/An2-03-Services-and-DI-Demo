import { Injectable } from '@angular/core';

@Injectable()
export class ChildDataService {

  getData(): string {
    return 'child-data';
  }

}
