import { Injectable } from '@angular/core';

@Injectable()
export class ArrayDataService {
  getAllData(): number[] {
    return [1, 2, 3, 4, 5];
  }
}

export const adsInstance = new ArrayDataService();
