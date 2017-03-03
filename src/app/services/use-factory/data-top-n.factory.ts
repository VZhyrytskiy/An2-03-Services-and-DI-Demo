import { OpaqueToken } from '@angular/core';
import { DataService } from './../common';

export const Data_Top3 = new OpaqueToken('DataTop3');

export function DataTopNFactory(take: number) {

  return function(data: DataService): any[] {
    return data.getAllData()
               .sort((a, b) => b - a)
               .filter((elem, index) => {
                 return index < take;
               });
  };

}
