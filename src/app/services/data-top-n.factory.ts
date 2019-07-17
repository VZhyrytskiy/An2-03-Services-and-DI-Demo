import { InjectionToken } from '@angular/core';
import { DataService } from '.';

export const DataTop3 = new InjectionToken<any[]>('DataTop3');

export function DataTopNFactory(take: number) {
  return (data: DataService): any[] =>
    data
      .getAllData()
      .sort((a, b) => b - a)
      .filter((elem, index) => {
        return index < take;
      });
}
