import { Component, InjectionToken, Inject, type OnInit } from '@angular/core';

const Token = new InjectionToken('Token');

@Component({
  selector: 'app-mprovider-demo',
  templateUrl: './mprovider-demo.component.html',
  styleUrls: ['./mprovider-demo.component.css'],
  providers: [
    { provide: Token, useValue: 1, multi: true },
    { provide: Token, useValue: 2, multi: true }
  ]
})
export class MProviderDemoComponent implements OnInit {
  content = '';

  constructor(@Inject(Token) private services: number[]) {}

  ngOnInit(): void {
    this.content = `${this.services[0]} ${this.services[1]}`;
  }
}
