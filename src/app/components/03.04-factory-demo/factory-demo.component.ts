import { Component, Inject, type OnInit } from '@angular/core';

import { RandomService, RandomToken } from 'src/app/services/random.service';
import { DataTopNFactory, DataTop3, DataService } from '../../services';

@Component({
  selector: 'app-factory-demo',
  standalone: true,
  templateUrl: './factory-demo.component.html',
  styleUrls: ['./factory-demo.component.css'],
  providers: [
    DataService,
    { provide: DataTop3, useFactory: DataTopNFactory(3), deps: [DataService] }
  ]
})
export class FactoryDemoComponent implements OnInit {
  content!: string;

  constructor(
    @Inject(DataTop3) private dataTop3: any[],
    @Inject(RandomToken) private randomNumber: number,
    private rs: RandomService
  ) {}

  ngOnInit(): void {
    this.content = `DataTop3: ${this.dataTop3} ${this.randomNumber} ${this.rs.generate()}`;
  }
}
