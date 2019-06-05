import { Component, OnInit, InjectionToken, Inject } from '@angular/core';

const MyToken = new InjectionToken<string[]>('token');

@Component({
  selector: 'app-mprovider-demo',
  templateUrl: './mprovider-demo.component.html',
  styleUrls: ['./mprovider-demo.component.css'],
  providers: [
    { provide: MyToken, useValue: '1', multi: true },
    { provide: MyToken, useValue: '2', multi: true }
  ]
})
export class MProviderDemoComponent implements OnInit {
  content = '';

  constructor(@Inject(MyToken) private services: string[]) {}

  ngOnInit() {
    this.content = `${this.services[0]} ${this.services[1]}`;
  }
}
