import { Component, OnInit, InjectionToken, Inject } from '@angular/core';

const MyToken = new InjectionToken<any>('token');

@Component({
  selector: 'app-multiprovider-demo',
  templateUrl: './multiprovider-demo.component.html',
  styleUrls: ['./multiprovider-demo.component.css'],
  providers: [
    { provide: MyToken, useValue: '1', multi: true },
    { provide: MyToken, useValue: '2', multi: true }
  ]
})
export class MultiproviderDemoComponent implements OnInit {
  content = '';
  constructor(@Inject(MyToken) private services: any[]) {}

  ngOnInit() {
    this.content = `${this.services[0]} ${this.services[1]}`;
  }
}
