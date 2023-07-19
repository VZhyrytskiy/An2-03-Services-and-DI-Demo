import { Component, Inject, InjectionToken, type OnInit } from '@angular/core';
import { ArrayDataService, adsInstance } from '../../services';

const TITLE = new InjectionToken<string>('title', {
  providedIn: 'root',
  factory: () => 'Application'
});

@Component({
  selector: 'app-value-demo',
  standalone: true,
  templateUrl: './value-demo.component.html',
  styleUrls: ['./value-demo.component.css'],
  providers: [
    { provide: ArrayDataService, useValue: adsInstance }
  ]
})
export class ValueDemoComponent implements OnInit {
  content!: string;

  constructor(
    @Inject(TITLE) public ttl: string,
    private adsIn: ArrayDataService
  ) {}

  ngOnInit(): void {
    this.content = this.adsIn.getAllData().toString();
  }
}
