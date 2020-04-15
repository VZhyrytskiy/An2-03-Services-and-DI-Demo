import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-provided-in-demo',
  template: `
      <a routerLink="a">Employee</a>
      <br>
      <a routerLink="b">Department</a>
      <router-outlet></router-outlet>
  `
})
export class ProvidedInDemoComponent implements OnInit {
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    console.log(this.configService.getValue());
  }
}
