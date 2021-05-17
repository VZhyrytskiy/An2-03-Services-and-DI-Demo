import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  getData(): string {
    return 'data';
  }

  getAllData(): Array<number> {
    return [1, 2, 3, 4, 5];
  }

}
