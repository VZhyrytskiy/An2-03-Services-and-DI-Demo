import { Component, InjectionToken, Inject, type OnInit } from '@angular/core';

const Token = new InjectionToken('Token');

@Component({
  selector: 'app-mprovider-demo',
  standalone: true,
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
    const [s1, s2] = this.services;

    this.content = `${s1} ${s2}`;
  }
}
