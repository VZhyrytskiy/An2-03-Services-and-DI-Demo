import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  printBookTitle() {
    console.log(`This is book title`);
  }
}
