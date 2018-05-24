import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-provided-in-demo',
  template: `
    <p>
      provided-in-demo works!<br>
      Look at bundle size.
    </p>
  `,
  styles: []
})
export class ProvidedInDemoComponent implements OnInit {
  // The size of main.js bundle is less when the service is not injected
  constructor() { }
  // constructor(public bookService: BookService) {}

  ngOnInit() {}
}
