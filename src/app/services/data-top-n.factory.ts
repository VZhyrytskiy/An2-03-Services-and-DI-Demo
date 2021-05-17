import { InjectionToken } from '@angular/core';
import { DataService } from '.';

export const DataTop3 = new InjectionToken<number[]>('DataTop3');

export function DataTopNFactory(take: number): (data: DataService) => number[] {
  return (data: DataService): number[] =>
    data
      .getAllData()
      .sort((a: number, b: number) => b - a)
      .filter((elem, index) => {
        return index < take;
      });
}
