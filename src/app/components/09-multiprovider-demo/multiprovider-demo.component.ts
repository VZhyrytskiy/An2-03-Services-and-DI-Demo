import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { DataService, ChildDataService } from './../../services';

const MyToken = new InjectionToken<any[]>('token');

@Component({
  selector: 'app-multiprovider-demo',
  templateUrl: './multiprovider-demo.component.html',
  styleUrls: ['./multiprovider-demo.component.css'],
  providers: [
    { provide: MyToken, useClass: DataService, multi: true},
    { provide: MyToken, useClass: ChildDataService, multi: true}
]
})
export class MultiproviderDemoComponent implements OnInit {
  content: string;
  constructor(
    @Inject(MyToken) private services: any[]
  ) { }

  ngOnInit() {
    this.content = `${(<DataService>this.services[0]).getData()} ${(<ChildDataService>this.services[1]).getData()}`;
  }

}
