import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  getData() {
    return 'data';
  }

  getAllData() {
    return [1, 2, 3, 4, 5];
  }

}
