import { InjectionToken } from '@angular/core';
import { DataService } from '.';

export const Data_Top3 = new InjectionToken<any[]>('DataTop3');

export function DataTopNFactory(take: number) {
  return function(data: DataService): any[] {
    return data
      .getAllData()
      .sort((a, b) => b - a)
      .filter((elem, index) => {
        return index < take;
      });
  };
}
