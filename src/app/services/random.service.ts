import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  generate(): number {
    return Math.random();
  }

}

export const RandomToken = new InjectionToken<number>('Random Number');


export function GenerateRandomNumber(): (rs: RandomService) => number {
  return (rs: RandomService): number =>
    rs.generate();
}
