import { OpaqueToken, InjectionToken } from '@angular/core';
import { DataService } from '.';

// OpaqueToken is deprecated since v4.0.0
// export const Data_Top3 = new OpaqueToken('DataTop3');
export const Data_Top3 = new InjectionToken<any[]>('DataTop3');

export function DataTopNFactory(take: number) {

  return function(data: DataService): any[] {
    return data.getAllData()
               .sort((a, b) => b - a)
               .filter((elem, index) => {
                 return index < take;
               });
  };

}
